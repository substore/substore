# Node version 16 on Alpine
FROM node:16-alpine

# Installed required deps
RUN apk add curl

# Install pnpm
RUN curl -fsSL "https://github.com/pnpm/pnpm/releases/latest/download/pnpm-linuxstatic-x64" -o /bin/pnpm; chmod +x /bin/pnpm;

# Create directory
RUN mkdir -p /usr/src/packages/backend

# Set working directory
WORKDIR /usr/src/packages/backend

# Copy package.json
COPY package.json .

# Copy rest of source code
COPY . .

# Install deps
RUN pnpm install

# Expose port 4000
EXPOSE 4000

# Run
CMD [ "pnpm", "start:dev" ]