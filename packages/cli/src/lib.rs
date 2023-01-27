pub(crate) mod commands;

use anyhow::Result;
use clap::Parser;
use commands::{handle_command, Commands};

#[derive(Debug, Parser)]
#[clap(
    name = "substore",
    about = "Interact with Substore via the CLI ☁️",
    version = "0.1.0",
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