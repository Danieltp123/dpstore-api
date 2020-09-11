FROM node:14-alpine

WORKDIR /home/app

COPY . ./

RUN yarn && yarn cache clean

EXPOSE 3001
EXPOSE 9229

CMD ["yarn", "start:dev"]
