#!/bin/bash

NEW_APP_DIR="/home/ubuntu/app_new"

# Frontend 디렉토리 권한 설정
if [ -d "$NEW_APP_DIR/frontend" ]; then
    sudo chown -R www-data:www-data "$NEW_APP_DIR/frontend"
    sudo chmod -R 775 "$NEW_APP_DIR/frontend"
fi