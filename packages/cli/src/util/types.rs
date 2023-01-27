use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize, Clone)]
pub enum StoreType {
    Redis,
    Mongodb,
    Postgresql,
    Mysql,
    Kafka,
    Rabbitmq
}

impl std::fmt::Display for StoreType {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        match self {
            StoreType::Redis => write!(f, "Redis"),
            StoreType::Mongodb => write!(f, "Mongodb"),
            StoreType::Postgresql => write!(f, "Postgresql"),
            StoreType::Mysql => write!(f, "Mysql"),
            StoreType::Kafka => write!(f, "Kafka"),
            StoreType::Rabbitmq => write!(f, "Rabbitmq")
        }
    }
}

#[derive(Debug, Deserialize, Serialize)]
pub struct Store {
    pub id: String,
    pub name: String,
    pub s_type: StoreType,
    pub url: String
}