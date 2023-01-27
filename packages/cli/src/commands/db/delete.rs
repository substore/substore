use anyhow::Result;
use clap::Parser;
use serde_json::json;

use crate::state::httpclient::HttpClient;

/*
query DeleteStore(name: String!) {
    deleteStore(name: $name)
}
*/

#[derive(Debug, Parser)]
#[clap(about = "Delete a store")]
pub struct Options {
    pub name: String,
}

pub async fn run(command: Options, http: HttpClient) -> Result<()> {
    let query = r#"
    query DeleteStore(name: String!) {
        deleteStore(name: $name)
    }"#;

    let variables = json!({
        "name": command.name
    });

    let res = http.request::<serde_json::Value>(query, Some((variables, "application/json"))).await;

    println!("{:?}", res);

    Ok(())
}
