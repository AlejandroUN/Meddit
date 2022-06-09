FROM node:14.17.4-stretch
RUN mkdir /meddit_interface_src
COPY /meddit_interface_src /meddit_interface

WORKDIR /meddit_interface
RUN npm install
EXPOSE 8000
CMD ["npm", "run", "start"]