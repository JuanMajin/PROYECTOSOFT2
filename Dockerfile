FROM node:16
WORKDIR /PROYECTOSOFT2
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm","test"] 