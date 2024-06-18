# Use the official Node image.
FROM node:18

# Install netcat-openbsd
RUN apt-get update && apt-get install -y netcat-openbsd

ENV APP_HOME /app
WORKDIR $APP_HOME

# Copy package.json and package-lock.json first for better caching
COPY package*.json ./

# Copy files into the container image.
COPY . .

# Install dependencies.
RUN npm install

# Run the web service on container startup.
EXPOSE 8080


# Run the web service on container startup.
CMD ["npm", "run", "dev"]