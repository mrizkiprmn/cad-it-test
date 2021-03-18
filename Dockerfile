FROM node:14
WORKDIR /home/rizkipermana/Documents/cad-it-test

COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 8080
CMD ["node", "task1.js"]