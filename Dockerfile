FROM node:18-alpine
WORKDIR /app
COPY . .

RUN npm -v
RUN node -v
RUN npm install -g create-react-app

ENV NODE_ENV production
EXPOSE 3000

CMD ["npx", "serve", "build"]