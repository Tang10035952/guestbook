# 使用官方 Node.js LTS 映像
FROM node:18-alpine

# 建立工作目錄
WORKDIR /app

# 複製 package.json 和 package-lock.json
COPY package*.json ./

# 安裝依賴
RUN npm install

# 複製後端程式碼
COPY . .

# Expose 3000 port
EXPOSE 3000

# 啟動指令
CMD ["node", "index.js"]