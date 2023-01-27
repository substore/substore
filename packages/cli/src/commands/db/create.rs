use anyhow::Result;
use clap::Parser;
use crate::util::types::StoreType;

/*
query CreateStore(type: StoreType!) {
    createStore(type: $type){
        id
        name
        type
        url
    }
}
*/

#[derive(Debug, Parser)]
#[clap(about = "Create a new store")]
pub struct Options {
    pub s_type: String,
    pub name: String,
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

pub async fn run(command: Options) -> Result<()> {
    let client = reqwest::Client::new();

    let s_type = parse_to_storetype(command.s_type);

    let res = client.post("http://localhost:4000/graphql")
        .json(&serde_json::json!({
            "query": "query CreateStore($type: StoreType!) {
                createStore(type: $type){
                    id
                    name
                    type
                    url
                }
            }",
            "variables": {
                "name": command.name,
                "type": s_type
            }
        }))
        .send()
        .await?;

    println!("Status: {}", res.status());

    Ok(())
}