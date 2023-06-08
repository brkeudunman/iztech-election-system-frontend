# Stage 1 - the build process
FROM node:14 as build-deps
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . ./
ARG REACT_APP_API_URL
RUN REACT_APP_API_URL=${REACT_APP_API_URL} npm run build

# Stage 2 - the production environment
FROM node:14
RUN npm install -g serve
WORKDIR /usr/src/app
COPY --from=build-deps /usr/src/app/build ./build
EXPOSE 5000
CMD ["serve", "-s", "build"]

