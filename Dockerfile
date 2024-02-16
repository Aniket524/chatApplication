FROM node:hydrogen-slim
WORKDIR /app
COPY . .
RUN sudo npm i
EXPOSE 3000
CMD ['node','index.js']
