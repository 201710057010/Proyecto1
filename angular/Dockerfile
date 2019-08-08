FROM node:11.4.0-alpine as builder

RUN mkdir /app
WORKDIR /app

COPY Frontend/package.json Frontend/package-lock.json /app/Frontend/

RUN npm install --prefix Frontend

COPY . /app
RUN npm run build --prefix Frontend -- --output-path=./dist/out

FROM nginx:1.15.7-alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/Frontend/dist/out /usr/share/nginx/html

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
