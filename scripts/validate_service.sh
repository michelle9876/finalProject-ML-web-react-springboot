#!/bin/bash
NEW_PORT=$(cat /home/ubuntu/current_port.txt)
echo "Checking application on port $NEW_PORT"
for i in {1..30}
do
    echo "Attempt $i: Checking http://localhost:$NEW_PORT/actuator/health"
    response=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:$NEW_PORT/actuator/health)
    echo "Response code: $response"
    if [ $response -eq 200 ]; then
        echo "New version is running successfully on port $NEW_PORT"
        sudo /home/ubuntu/switch_traffic.sh $NEW_PORT
        exit 0
    fi
    echo "Waiting for application to start... (Attempt $i/30)"
    sleep 10
done
echo "New version failed to start"
exit 1