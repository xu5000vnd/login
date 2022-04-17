FROM node:alpine

WORKDIR /user/app
COPY ./package.json ./
RUN npm install
COPY ./ ./
RUN npm run apidoc
COPY ./ ./
CMD ["npm","start"]