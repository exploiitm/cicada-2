# Use official Node 20 Alpine base image
FROM node:20-alpine

# Optionally upgrade npm to latest
RUN npm install -g npm@latest

# Set working directory
WORKDIR /app

# Copy package manifest files for dependency installation
COPY middlewarebypassq/package.json middlewarebypassq/package-lock.json* ./

# Clean install dependencies (ensures proper symlinks)
RUN rm -rf node_modules package-lock.json && npm install

# Copy application source code (excluding node_modules via .dockerignore)
COPY middlewarebypassq/ .

# Remove any copied node_modules and reinstall to fix symlinks
RUN rm -rf node_modules && npm install

# Build Next.js app inside container
RUN npx next build

# Expose port Next.js app listens on
EXPOSE 3000

# Start Next.js production server
CMD ["npx", "next", "start"]

