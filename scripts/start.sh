#!/bin/bash
# 애플리케이션 시작
cd /home/ec2-user/app
nohup java -jar *.jar > /dev/null 2>&1 &