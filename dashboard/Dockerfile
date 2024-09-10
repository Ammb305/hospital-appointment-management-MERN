# Use an official node image as a base
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app
RUN npm run build

# Expose the port Vite runs on
EXPOSE 5174

# Command to run the app
CMD ["npm", "run", "dev"]
