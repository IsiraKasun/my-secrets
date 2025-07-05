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

# Install "serve" globally
RUN npm install -g serve

# Copy only the build output
COPY --from=builder /app/dist ./dist

EXPOSE 8080
CMD ["serve", "-s", "dist", "-l", "8080"]