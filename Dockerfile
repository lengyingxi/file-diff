FROM nginx:alpine

# 拷贝前端页面到 nginx 目录
COPY frontend /usr/share/nginx/html

