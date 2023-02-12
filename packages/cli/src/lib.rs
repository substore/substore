pub(crate) mod commands;
pub(crate) mod util;
pub(crate) mod config;
pub(crate) mod state;

use anyhow::Result;
use clap::Parser;
use commands::{handle_command, Commands};
use state::State;

#[derive(Debug, Parser)]
#[clap(
    name = "substore",
    about = "Interact with substore using the CLI ☁️",
    version = crate::config::CLI_VERSION,
    author = "substore"
)]
pub struct CLI {
    #[clap(subcommand)]
    pub commands: Commands,
}

pub async fn run() -> Result<()> {
    let cli = CLI::parse();

    let state = State::new().await;

    if let Err(error) = handle_command(cli.commands, state).await {
        eprintln!("{}", error);
    }

    Ok(())
}