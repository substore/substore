pub mod auth;
pub mod db;

use anyhow::Result;
use clap::Subcommand;

use crate::state::State;

#[derive(Debug, Subcommand)]
pub enum Commands {
    Auth(auth::Options),
    #[clap(alias = "database")]
    Db(db::Options),
}

pub async fn handle_command(command: Commands, state: State) -> Result<()> {
    match command {
        Commands::Auth(options) => auth::run(options).await,
        Commands::Db(options) => db::run(options, state).await,
    }
}   