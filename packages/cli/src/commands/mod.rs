pub mod auth;
pub mod db;

use anyhow::Result;
use clap::Subcommand;

#[derive(Debug, Subcommand)]
pub enum Commands {
    Auth(auth::Options),
    #[clap(alias = "database")]
    Db(db::Options),
}

pub async fn handle_command(command: Commands) -> Result<()> {
    match command {
        Commands::Auth(options) => auth::run(options).await,
        Commands::Db(options) => db::run(options).await,
    }
}    