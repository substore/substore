use anyhow::Result;
use clap::Parser;
use serde_json::json;
use crate::util::types::StoreType;
use crate::state::httpclient::HttpClient;

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
    let s_type = parse_to_storetype(command.s_type);

    let query = r#"
    query CreateStore(type: StoreType!) {
        createStore(type: $type){
            id
            name
            type
            url
        }
    }"#;

    let variables = json!({
        "type": s_type
    });

    let res = http.request::<serde_json::Value>(query, Some((variables, "application/json"))).await;

    println!("{:?}", res);

    Ok(())
}