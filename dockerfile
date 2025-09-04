FROM node:20-alpine

# working directory inside the container
WORKDIR /app

# First, we copy only package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
# Using npm ci for clean install, fallback to npm install if it fails
RUN npm ci --omit=dev --no-audit --no-fund || npm install --omit=dev --no-audit --no-fund

# Copy the rest of the application code
COPY server.js ./

# environment variables and exposed port
ENV NODE_ENV=production
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]
