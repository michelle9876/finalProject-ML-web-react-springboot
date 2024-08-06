#!/bin/bash
# 실행 중인 애플리케이션 중지
if pgrep java; then
    pkill java
fi