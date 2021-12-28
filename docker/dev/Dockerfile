FROM node:16.10.0

RUN ["yarn", "global", "add",  "typescript"]
RUN ["yarn", "global", "add",  "nodemon"]

# Create app directory
RUN mkdir -p /app

WORKDIR /app

EXPOSE 5500

CMD ["yarn", "docker-dev"]