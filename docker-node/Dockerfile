FROM ubuntu:22.04

# Prevent prompts during package installation
ENV DEBIAN_FRONTEND=noninteractive

# Update, install dependencies, setup Node.js, and clean up in one layer
RUN apt-get update && \
    apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    apt-get upgrade -y && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Copy package files
COPY package.json package-lock.json ./

# Install npm dependencies
RUN npm install

# Copy application file
COPY main.js .

# Set the entrypoint
ENTRYPOINT ["node", "main.js"]