FROM node:19-alpine

RUN apk add curl

RUN curl -fsSL "https://github.com/pnpm/pnpm/releases/latest/download/pnpm-linuxstatic-x64" -o /bin/pnpm; chmod +x /bin/pnpm;

RUN mkdir -p /usr/src/packages/provisioner

WORKDIR /usr/src/packages/provisioner

COPY package.json .

COPY . .

RUN pnpm install

CMD [ "pnpm", "build" ]