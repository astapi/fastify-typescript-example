FROM node:12.19.0-alpine3.11

# RUN groupadd api-group
# RUN useradd -ms /bin/bash api-user
WORKDIR /app
# RUN chown -R api-user:api-group /app

# USER api-user
COPY package.json /app/
RUN yarn install
COPY . /app/
COPY src/ /app/
RUN yarn build
EXPOSE 3030
CMD yarn start

