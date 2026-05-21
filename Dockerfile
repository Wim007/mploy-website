FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install -g serve

CMD sh -c "serve -s . -l 0.0.0.0:${PORT:-3000}"
