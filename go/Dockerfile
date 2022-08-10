FROM golang:alpine AS builder

WORKDIR /app

COPY *.go .

RUN go env -w GO111MODULE=off

RUN go build -o /app/go-app

FROM scratch

WORKDIR /app

COPY --from=builder /app/go-app /app/go-app

ENTRYPOINT ["/app/go-app"]