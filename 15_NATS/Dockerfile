FROM nats:alpine

EXPOSE 4222
EXPOSE 6222
EXPOSE 8222
EXPOSE 8089

COPY ./config/my-nats.conf /my-nats-server.conf

# RUN pwd
# RUN ls -l

CMD ["nats-server", "--config", "/my-nats-server.conf"]
