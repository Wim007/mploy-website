FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install -g serve@14

CMD sh -c "serve -s . -l ${PORT:-3000}"
