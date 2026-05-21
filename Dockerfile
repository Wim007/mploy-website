FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install -g serve

CMD sh -c "serve -s . -p ${PORT:-3000} -a 0.0.0.0"
