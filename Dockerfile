FROM nginx:1.25.2-alpine3.18
COPY ./etc/default.conf /etc/nginx/conf.d/
COPY ./src /usr/share/nginx/html/
EXPOSE 80