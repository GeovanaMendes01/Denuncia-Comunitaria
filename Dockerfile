# Stage 1: Build the TypeScript application
FROM node:20-slim AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Create the final, smaller runtime image
FROM node:20-slim

WORKDIR /app
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package*.json ./
COPY --from=build /app/dist ./dist

ENV PORT=8080
EXPOSE 8080

# Start the app
CMD ["node", "dist/index.js"]