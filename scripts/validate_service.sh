#!/bin/bash

CURRENT_PORT=$(cat /home/ubuntu/service_url.inc | grep -Po '[0-9]+' | tail -1)
TARGET_PORT=0

if [ ${CURRENT_PORT} -eq 8081 ]; then
    TARGET_PORT=8082
elif [ ${CURRENT_PORT} -eq 8082 ]; then
    TARGET_PORT=8081
else
    echo "> No WAS is connected to nginx"
    exit 1
fi

echo "> Start health check of WAS at 'http://127.0.0.1:${TARGET_PORT}' ..."

for RETRY_COUNT in {1..30}
do
    echo "> #${RETRY_COUNT} trying..."
    RESPONSE_CODE=$(curl -s -o /dev/null -w "%{http_code}"  http://127.0.0.1:${TARGET_PORT}/actuator/health)

    if [ ${RESPONSE_CODE} -eq 200 ]; then
        echo "> New WAS successfully running"
        
        # 여기서부터 switch_traffic.sh의 내용을 추가
        echo "> Nginx currently proxies to ${CURRENT_PORT}."
        echo "set \$service_url http://127.0.0.1:${TARGET_PORT};" | sudo tee /home/ubuntu/service_url.inc
        echo "> Now Nginx proxies to ${TARGET_PORT}."

        sudo nginx -t && sudo systemctl reload nginx

        echo "> Nginx reloaded."
        exit 0
    elif [ ${RETRY_COUNT} -eq 30 ]; then
        echo "> Health check failed."
        exit 1
    fi
    sleep 10
done