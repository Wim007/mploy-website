FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install -g http-server

CMD sh -c "http-server . -p ${PORT:-3000} -a 0.0.0.0"
