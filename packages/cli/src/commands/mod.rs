pub mod auth;
pub mod db;
pub mod backup;

use anyhow::Result;
use clap::Subcommand;

use crate::state::State;

#[derive(Debug, Subcommand)]
pub enum Commands {
    Auth(auth::Options),
    #[clap(alias = "database")]
    Db(db::Options),
    Backup(backup::Options),
}

pub async fn handle_command(command: Commands, state: State) -> Result<()> {
    match command {
        Commands::Auth(options) => auth::run(options).await,
        Commands::Db(options) => db::run(options, state).await,
        Commands::Backup(options) => backup::run(options, state).await,
    }
}   