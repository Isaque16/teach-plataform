FROM oven/bun:1.1-alpine

WORKDIR /usr/src/app

COPY package.json bun.lock* ./

RUN bun install

COPY . .

EXPOSE 3001

CMD ["bun", "--watch", "src/index.ts"]