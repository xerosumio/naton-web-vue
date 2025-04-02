FROM node:hydrogen-alpine as build-stage

WORKDIR /app

COPY . .

RUN npm i -f

RUN npm run build

# production
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
ENTRYPOINT nginx -g 'daemon off;'