# Todo switch to pnpm
FROM node:lts as dependencies
WORKDIR /dashbaord
COPY package.json yarn.lock .
RUN yarn install --frozen-lockfile

FROM node:lts as builder
WORKDIR /dashboard
COPY . .
RUN yarn build

FROM node:lts as runner
WORKDIR /dashboard
ENV NODE_ENV production
COPY --from=builder /dashboard/public ./public
COPY --from=builder /dashboard/.next ./.next
COPY --from=builder /dashboard/node_modules ./node_modules
COPY --from=builder /dashboard/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]