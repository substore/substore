use anyhow::Result;
use clap::{Parser, Subcommand};

use crate::state::State;

#[derive(Debug, Subcommand)]
pub enum Commands {
    #[clap(alias = "c")
    Create(create::Options)]
    #[clap(alias = "d")]
    Delete(delete::Options),
}

#[derive(Debug, Parser)]
#[clap(about = "Interact with your Backups")]
pub struct Options {
    #[clap](subcommand)]
    pub commands: Commands
}

// run