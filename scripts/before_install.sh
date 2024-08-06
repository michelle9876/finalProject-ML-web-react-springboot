#!/bin/bash
# 애플리케이션 디렉토리 생성
if [ ! -d /home/ec2-user/app ]; then
    mkdir -p /home/ec2-user/app
fi

# 기존 파일 정리
rm -rf /home/ec2-user/app/*