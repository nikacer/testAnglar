# Stage 1
FROM node as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build --prod

# Stage 2
FROM nginx:stable as final
WORKDIR /web
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-step /app/dist/front .
