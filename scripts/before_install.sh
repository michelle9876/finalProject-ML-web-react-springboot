#!/bin/bash
# 디렉토리 및 파일 권한 정리
sudo chown -R ubuntu:ubuntu /home/ubuntu/app_new
sudo chmod -R 775 /home/ubuntu/app_new

# 이전 배포에서 남은 파일들 정리
if [ -d /home/ubuntu/app_new ]; then
    rm -rf /home/ubuntu/app_new
fi

# 새로운 배포를 위한 디렉토리 생성
mkdir -p /home/ubuntu/app_new