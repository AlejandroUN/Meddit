FROM node:carbon-slim

# Create app directory
WORKDIR /meddit_ag

# Install app dependencies
COPY package.json /meddit_ag/
RUN npm install

# Bundle app source
COPY . /meddit_ag/
RUN npm run prepublish

CMD [ "npm", "run", "runServer" ]
