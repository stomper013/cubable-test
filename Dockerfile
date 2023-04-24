FROM node:18
WORKDIR /home/src/app
COPY package*.json .
RUN yarn
COPY . .
CMD ["yarn", "dev"]