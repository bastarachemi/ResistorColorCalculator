FROM node:12
RUN mkdir /app
WORKDIR /app
RUN npm install -g @angular/cli
RUN npm install -g http-server
CMD ["sh", "./container-script.sh"]
