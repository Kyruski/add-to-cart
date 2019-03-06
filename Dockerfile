FROM node:10.15.1

COPY . /

EXPOSE 3000

CMD ["node", "server/index.js"]