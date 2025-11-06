# Stage 1: Build Angular application
FROM node:22.15.1-alpine3.20 AS build
# Set working directory
WORKDIR /app
# Copy only package files to install dependencies
COPY package*.json ./
# Install dependencies
RUN npm ci
# Copy the rest of the source code
COPY . .
# Build the Angular app for production
RUN npm run build -- --configuration production

# Stage 2: Apache server to host the app
FROM httpd:2.4.64-alpine3.22
# Set Apache document root as working directory
WORKDIR /usr/local/apache2/htdocs
# Copy built Angular files from previous stage
COPY --from=build /app/dist/portfolio/browser .
# Expose HTTP port
EXPOSE 80
