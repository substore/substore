use clap::Parser;
use anyhow::{Result, anyhow};
use crate::util::types::StoreType;
use crate::state::httpclient::HttpClient;

#[derive(Debug, Parser)]
#[clap(about = "Create a new backup")]
pub struct Options {
    #[clap(help = "Name of the backup")]
    pub b_name: String,
    #[clap(help = "Type of the store")]
    pub s_type: String,
}

fn parse_to_storetype(s_type: String) -> StoreType {
    match s_type.to_ascii_lowercase().as_str() {
        "redis" => StoreType::Redis,
        "mongodb" => StoreType::Mongodb,
        "postgresql" => StoreType::Postgresql,
        "mysql" => StoreType::Mysql,
        "kafka" => StoreType::Kafka,
        "rabbitmq" => StoreType::Rabbitmq,
        _ => StoreType::Redis
    }
}

pub async fn run(command: Options, http: HttpClient) -> Result<()> {
    let b_name = command.b_name;
    let s_type = command.s_type;

    println!("Backup name: {}", b_name);
    println!("Store type: {}", parse_to_storetype(s_type));

    Err(anyhow!("Not implemented"))
}