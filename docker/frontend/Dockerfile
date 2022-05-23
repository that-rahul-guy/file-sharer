FROM alpine

# Installing npm & node
RUN apk add --update npm

# Installing npm serve for serving react build
RUN npm install -g serve

# Make directory for the app
RUN mkdir fs-frontend

COPY . fs-frontend

CMD [ "serve", "/fs-frontend/build" ]