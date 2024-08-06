#!/bin/bash
# Nginx 설정 업데이트 및 리로드
NEW_PORT=$1
sudo sed -i "s/proxy_pass http:\/\/localhost:[0-9]\+/proxy_pass http:\/\/localhost:$NEW_PORT/" /etc/nginx/sites-available/default
sudo systemctl reload nginx
echo "Traffic switched to port $NEW_PORT"