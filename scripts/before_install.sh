#!/bin/bash

# 새 애플리케이션 디렉토리 생성
NEW_APP_DIR="/home/ubuntu/app_new"
if [ ! -d "$NEW_APP_DIR" ]; then
    mkdir -p "$NEW_APP_DIR"
fi

# 새 디렉토리 권한 설정
sudo chown -R ubuntu:ubuntu "$NEW_APP_DIR"
sudo chmod -R 775 "$NEW_APP_DIR"

# 기존 파일 정리 (이전 배포의 잔여물이 있을 경우)
rm -rf "$NEW_APP_DIR"/*

# 현재 포트 파일이 없으면 초기 포트 설정
if [ ! -f /home/ubuntu/current_port.txt ]; then
    echo "8080" > /home/ubuntu/current_port.txt
fi