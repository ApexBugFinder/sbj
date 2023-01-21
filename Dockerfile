
FROM node:14-alpine as build
ENV NODE_ENV=production
WORKDIR /app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*","./"  ]

RUN npm install --production --silent && mv node_modules ../

COPY . /app

RUN chown -R node /app
CMD ["npm", "start"]

FROM nginx:latest

COPY --from=0 /app/dist/sbj /usr/share/nginx/html

EXPOSE 80
