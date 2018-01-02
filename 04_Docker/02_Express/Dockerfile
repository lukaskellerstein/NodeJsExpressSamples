# Stage 1 - BUILD
FROM node:alpine
WORKDIR /source
COPY . .

RUN npm install -g typescript
RUN npm install
RUN tsc

RUN pwd
RUN ls -l

EXPOSE 3001
CMD node dist/server.js