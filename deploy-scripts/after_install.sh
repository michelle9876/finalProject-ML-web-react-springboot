#!/bin/bash
sudo chown -R www-data:www-data /home/ubuntu/app/frontend
sudo chmod -R 775 /home/ubuntu/app/frontend
sudo systemctl reload nginx
