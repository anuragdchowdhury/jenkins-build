# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:18.16.1-alpine as build-stage
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
RUN npm run build
# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.25.1
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build-stage /app/build/ /usr/share/nginx/html
# Copy the default nginx.conf provided by tiangolo/node-frontend
COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf