FROM node:22-bookworm-slim
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev
COPY events.js server.js ./
USER node
EXPOSE 3000
CMD ["node", "server.js"]
