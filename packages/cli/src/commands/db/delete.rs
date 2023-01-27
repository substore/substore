use anyhow::Result;
use clap::Parser;

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

pub async fn run(command: Options) -> Result<()> {
    let client = reqwest::Client::new();

    let res = client.post("http://localhost:8080/graphql")
        .json(&serde_json::json!({
            "query": "query DeleteStore($name: String!) {
                deleteStore(name: $name)
            }",
            "variables": {
                "name": command.name
            }
        }))
        .send()
        .await?;

    println!("Status: {}", res.status());

    Ok(())
}
