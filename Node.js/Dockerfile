FROM node:26.2.0-slim

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev" ]
