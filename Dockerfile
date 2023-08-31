FROM node:16

#create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./


RUN npm install 


#Budle app source
COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", " start:prod"]

