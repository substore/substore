use anyhow::Result;
use clap::Parser;

#[derive(Debug, Parser)]
#[clap(about = "Login to substore")]
pub struct Options {}

pub async fn run(_command: Options) -> Result<()> {
    println!("Not implemented");

    Ok(())
}