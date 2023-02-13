mod create;
mod delete;

use anyhow::Result;
use clap::{Parser, Subcommand};

use crate::state::State;

#[derive(Debug, Subcommand)]
pub enum Commands {
    #[clap(alias = "c")]
    Create(create::Options),
    #[clap(alias = "d")]
    Delete(delete::Options),
}

#[derive(Debug, Parser)]
#[clap(about = "Interact with your Backups")]
pub struct Options {
    #[clap(subcommand)]
    pub commands: Commands
}

// run
pub async fn run(options: Options, state: State) -> Result<()> {
    match options.commands {
        Commands::Create(options) => create::run(options, state.http).await,
        Commands::Delete(options) => delete::run(options, state.http).await,
    }
}