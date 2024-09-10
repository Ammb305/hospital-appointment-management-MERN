# Dockerfile for backend
FROM node:18

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies inside the container
RUN npm install

# Copy the rest of the application code
COPY . .

# Rebuild bcrypt from source if needed
RUN npm rebuild bcrypt --build-from-source

EXPOSE 4000
CMD ["npm", "start"]
