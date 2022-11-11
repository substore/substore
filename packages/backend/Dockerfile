FROM node:18-alpine

RUN apk add curl

RUN curl -fsSL "https://github.com/pnpm/pnpm/releases/latest/download/pnpm-linuxstatic-x64" -o /bin/pnpm; chmod +x /bin/pnpm;

RUN mkdir -p /usr/src/packages/backend

WORKDIR /usr/src/packages/backend

COPY package.json .

COPY . .

RUN pnpm install

EXPOSE 8080

CMD [ "pnpm", "start:dev" ]