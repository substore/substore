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
        },
    ],
    [
        "POSTGRESQL",
        {
          image: "ghcr.io/substore/postgres:15",
          password_var: "POSTGRES_PASSWORD",
          port: 5432,
          data: "/var/lib/postgresql/data",
          protocol: "redis",
          username: "default",
          dbName: "substore",
        },
    ],
    [
        "MYSQL",
        {
            image: "ghcr.io/substore/mysql:8",
            password_var: "MYSQL_ROOT_PASSWORD",
            port: 3306,
            data: "/var/lib/mysql",
            protocol: "mysql",
            username: "root",
            dbName: "substore",
        },
    ],
    [
        "MONGODB",
        {
            image: "ghcr.io/substore/mongo:latest",
            password_var: "MONGO_INITDB_ROOT_PASSWORD",
            port: 27017,
            data: "/data/db",
            protocol: "mongo",
            username: "mongodb",
            dbName: "",
        },
    ],
])