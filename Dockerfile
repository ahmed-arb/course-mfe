FROM node
WORKDIR ./
COPY package*.json ./
RUN npm install --force
COPY . .

EXPOSE 2010

CMD ["npm", "start"]