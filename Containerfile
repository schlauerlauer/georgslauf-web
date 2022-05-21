FROM docker.io/library/node:16.15-alpine3.14
WORKDIR /app
EXPOSE 3000
CMD ["npm", "run", "start"]