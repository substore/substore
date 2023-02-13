use clap::Parser;
use anyhow::{Result, anyhow};
use crate::state::httpclient::HttpClient;

#[derive(Debug, Parser)]
#[clap(about = "Delete a backup")]
pub struct Options {
    #[clap(help = "Name of the backup")]
    pub b_name: String,
}

pub async fn run(command: Options, http: HttpClient) -> Result<()> {
    let b_name = command.b_name;

    println!("Backup name: {}", b_name);

    Err(anyhow!("Not implemented"))
}