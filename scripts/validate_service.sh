#!/bin/bash
# 새 버전 상태 확인
NEW_PORT=$(cat /home/ubuntu/current_port.txt)
for i in {1..10}
do
    if curl -s http://localhost:$NEW_PORT/health | grep -q "UP"; then
        echo "New version is running successfully on port $NEW_PORT"
        sudo /home/ubuntu/switch_traffic.sh $NEW_PORT
        exit 0
    fi
    echo "Waiting for application to start... (Attempt $i/10)"
    sleep 3
done
echo "New version failed to start"
exit 1