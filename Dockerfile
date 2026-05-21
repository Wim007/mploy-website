FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install -g serve@14

CMD sh -c "serve -s . -l tcp://0.0.0.0:${PORT:-3000}"
