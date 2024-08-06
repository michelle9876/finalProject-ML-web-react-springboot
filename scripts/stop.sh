#!/bin/bash
# 현재 실행 중인 애플리케이션 확인 및 중지
if [ -f /home/ubuntu/current_port.txt ]; then
    CURRENT_PORT=$(cat /home/ubuntu/current_port.txt)
    PID=$(lsof -t -i:$CURRENT_PORT)
    if [ ! -z "$PID" ]; then
        echo "Stopping application on port $CURRENT_PORT"
        kill $PID
    fi
else
    echo "No current application running"
fi