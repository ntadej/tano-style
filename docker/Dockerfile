FROM nginx:1.31.5
COPY nginx.conf /etc/nginx/nginx.conf
COPY default.conf /etc/nginx/conf.d/default.conf
COPY tano /usr/share/nginx/html/tano
RUN rm /usr/share/nginx/html/index.html
