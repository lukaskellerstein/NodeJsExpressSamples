# Custom NATS server

`docker build -t utf/nats .`

`docker run -d -p 4222:4222 -p 6222:6222 -p 8222:8222 -p 8089:8089 utf/nats`


# Original NATS server

`docker run -d --name nats-main -p 4222:4222 -p 6222:6222 -p 8222:8222 nats`

NATS UI

http://localhost:8222/


