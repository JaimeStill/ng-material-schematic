FROM node:lts-alpine as build
WORKDIR /usr/local/<%= dasherize(app) %>/
COPY . .
RUN npm i
RUN npm run build

FROM nginx:latest
COPY --from=build /usr/local/<%= dasherize(app) %>/dist/<%= dasherize(app) %>/browser /usr/share/nginx/html
EXPOSE 80
