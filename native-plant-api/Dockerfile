FROM node:13

WORKDIR /usr/app

RUN npm install -g ts-node typescript

COPY package*.json /usr/app

RUN yarn install

COPY . /usr/app

EXPOSE 3001

CMD [ "yarn", "start"]
