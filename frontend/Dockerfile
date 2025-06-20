# Build Stage

FROM node AS builder

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "run", "build"]


# Production Stage
FROM node AS runner

WORKDIR /app

COPY --from=builder /app/dist ./dist

COPY --from=builder /app/package*.json ./

RUN npm install --production

EXPOSE 8080

CMD ["npm", "run", "preview"]