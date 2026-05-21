FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install -g serve

CMD sh -c "serve -s . -l ${PORT:-3000}"
