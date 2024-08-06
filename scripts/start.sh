#!/bin/bash
# 새 버전 시작 (8080 또는 8081 포트 사용)
if [ -f /home/ubuntu/current_port.txt ] && [ "$(cat /home/ubuntu/current_port.txt)" == "8080" ]; then
    NEW_PORT=8081
else
    NEW_PORT=8080
fi

echo "Starting new version on port $NEW_PORT"
nohup java -jar /home/ubuntu/app_new/*.jar --server.port=$NEW_PORT > /home/ubuntu/app.log 2>&1 &
echo $NEW_PORT > /home/ubuntu/current_port.txt