FROM node:14-alpine

WORKDIR /home/app

COPY . ./

RUN yarn && yarn cache clean

RUN yarn build

EXPOSE 3001

RUN npm install pm2 -g

CMD ["sh", "-c", "pm2-runtime start -i 2 --name API dist/main.js"]