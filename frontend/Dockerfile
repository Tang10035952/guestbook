# 使用 nginx 官方映像
FROM nginx:alpine

# 複製前端靜態檔到 nginx 預設目錄
COPY . /usr/share/nginx/html

# 複製自定義 nginx 設定檔
COPY default.conf /etc/nginx/conf.d/default.conf

# 暴露 80 端口
EXPOSE 80
