FROM node:16

WORKDIR /frc
COPY . .
RUN npm i
RUN npm run build

CMD ["npm", "start"]