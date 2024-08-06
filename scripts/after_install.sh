#!/bin/bash

NEW_APP_DIR="/home/ubuntu/app_new"

# Frontend 디렉토리 권한 설정
if [ -d "$NEW_APP_DIR/frontend" ]; then
    sudo chown -R www-data:www-data "$NEW_APP_DIR/frontend"
    sudo chmod -R 775 "$NEW_APP_DIR/frontend"
fi

# Nginx 설정 파일 확인 및 수정
NGINX_CONF="/etc/nginx/sites-available/default"
if [ ! -f "$NGINX_CONF" ] || ! grep -q "proxy_pass http://localhost:" "$NGINX_CONF"; then
    # Nginx 설정 파일이 없거나 proxy_pass 설정이 없는 경우, 새로 설정
    sudo tee "$NGINX_CONF" > /dev/null <<EOF
server {
    listen 80;
    server_name _;

    location / {
        proxy_pass http://localhost:8080;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
    }
}
EOF
fi

# Nginx 재로드
sudo systemctl reload nginx

echo "After install script completed successfully"