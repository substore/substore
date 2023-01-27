pub mod create;
pub mod delete;

use anyhow::Result;
use clap::{Parser, Subcommand};

#[derive(Debug, Subcommand)]
pub enum Commands {
    #[clap(alias = "c")]
    Create(create::Options),
    #[clap(alias = "d")]
    Delete(delete::Options),
}

#[derive(Debug, Parser)]
#[clap(about = "Interact with stores")]
pub struct Options {
    #[clap(subcommand)]
    pub commands: Commands,
}

pub async fn run(options: Options) -> Result<()> {
    match options.commands {
        Commands::Create(options) => create::run(options).await,
        Commands::Delete(options) => delete::run(options).await,
    }
}