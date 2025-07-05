FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

ENV MONGODB_USERNAME=isira
ENV MONGODB_PASSWORD=secret

CMD ["npm", "run", "dev"]