FROM node:22-slim AS prod

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev

COPY . .

EXPOSE 5000

CMD ["node", "src/server.js"]

FROM node:22-slim AS dev

WORKDIR /src

ENV PORT=5000

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "run", "dev" ]
