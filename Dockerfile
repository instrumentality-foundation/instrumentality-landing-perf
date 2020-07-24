FROM node:lts-alpine

# Installing yarn, serve static server and svgo for svg optimisations
RUN npm install yarn
RUN yarn global add serve svgo

# Set /landing as current directory
WORKDIR /landing

COPY package.json ./
COPY yarn.lock ./

# Install all dependencies
RUN yarn install

# Copy project files
COPY . .

# Run svgo on all assets
RUN svgo -f ./src/assets/Illustrations

# Build app
RUN yarn build

# Port for serving the landing site
EXPOSE 8080

# Serve the site
CMD [ "serve", "-l", "8080", "-s", "-C", "dist" ]