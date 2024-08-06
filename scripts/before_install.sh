#!/bin/bash
# 애플리케이션 디렉토리 생성
if [ ! -d /home/ubuntu/app ]; then
    mkdir -p /home/ubuntu/app
fi

# 기존 파일 정리
rm -rf /home/ubuntu/app/*