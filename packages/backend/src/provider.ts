// TODO: add kafka, postgres, rabbitmq and mongo.

export const providers = new Map([
    [
        "REDIS",
        {
            image: "ghcr.io/substore/redis:7",
            password: "REDIS_PASSWORD",
            port: 6379,
            data: "/data",
            protocol: "redis",
            username: "default",
            dbName: "",
        }
    ]
])