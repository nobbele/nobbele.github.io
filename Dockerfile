FROM node:alpine

WORKDIR /usr/app

RUN echo "Installing dependencies"

COPY ./package*.json ./
RUN npm install --production

RUN echo "Building Website"

COPY ./ ./
RUN npm run build

RUN echo "Finished"

USER node

CMD [ "npm", "start" ]
EXPOSE 3000