FROM mhart/alpine-node:latest

ADD . /app
RUN cd /app && npm install

WORKDIR /app

EXPOSE 3000

CMD ["npm", "start"]