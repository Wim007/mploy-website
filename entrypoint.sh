#!/bin/sh
sed "s/RAILWAY_PORT/${PORT:-8080}/g" /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf
exec nginx -g "daemon off;"
