pub(crate) mod commands;
pub(crate) mod util;
pub(crate) mod config;

use anyhow::Result;
use clap::Parser;
use commands::{handle_command, Commands};

#[derive(Debug, Parser)]
#[clap(
    name = "substore",
    about = "Interact with substore using the command line",
    version = crate::config::CLI_VERSION,
    author = "substore"
)]
pub struct CLI {
    #[clap(subcommand)]
    pub commands: Commands,
}

pub async fn run() -> Result<()> {
    let cli = CLI::parse();
    if let Err(error) = handle_command(cli.commands).await {
        eprintln!("{}", error);
    }

    Ok(())
}