#!/bin/bash
# 디렉토리 및 파일 권한 정리
sudo chown -R ubuntu:ubuntu /home/ubuntu/app
sudo chmod -R 775 /home/ubuntu/app

# 애플리케이션 디렉토리 생성
if [ ! -d /home/ubuntu/app ]; then
    mkdir -p /home/ubuntu/app
fi

# 기존 파일 정리
rm -rf /home/ubuntu/app/*