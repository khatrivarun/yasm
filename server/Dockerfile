FROM node:16-alpine

WORKDIR /server

COPY package.json .

RUN npm install --legacy-peer-deps

COPY . ./

ENV NODE_ENV=development
ENV DATABASE_HOST=localhost
ENV DATABASE_PORT=8080
ENV DATABASE_USER=user
ENV DATABASE_PASSWORD=password
ENV DATABASE_NAME=db
ENV DATABASE_URL=url
ENV PORT=5000

ENV FIREBASE_ADMIN_TYPE=EXAMPLE
ENV FIREBASE_ADMIN_PROJECT_ID=EXAMPLE
ENV FIREBASE_ADMIN_PRIVATE_KEY_ID=EXAMPLE
ENV FIREBASE_ADMIN_PRIVATE_KEY=EXAMPLE
ENV FIREBASE_ADMIN_CLIENT_EMAIL=EXAMPLE
ENV FIREBASE_ADMIN_CLIENT_ID=EXAMPLE
ENV FIREBASE_ADMIN_AUTH_URI=EXAMPLE
ENV FIREBASE_ADMIN_TOKEN_URI=EXAMPLE
ENV FIREBASE_ADMIN_AUTH_PROVIDER=EXAMPLE
ENV FIREBASE_ADMIN_CLIENT_CERT=EXAMPLE
ENV FIREBASE_WEB_API_KEY=EXAMPLE

EXPOSE ${PORT}

CMD ["npm", "run", "start:dev"]