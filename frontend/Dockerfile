# Use an official node image as a base
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port Vite dev server will run on
EXPOSE 5173

# Command to run the app in development mode
CMD ["npm", "run", "dev", "--", "--port", "5173", "--host"]
