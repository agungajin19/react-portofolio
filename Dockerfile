FROM nginx:stable
MAINTAINER Agung  "nugroh0@alterra.id"

RUN mkdir -p /frontend/www/react
RUN mkdir -p /frontend/logs/nginx

COPY default.conf /etc/nginx/conf.d/
COPY . /frontend/www/react

WORKDIR /frontend/www/react