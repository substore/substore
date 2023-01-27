mod cli_auth;

use anyhow::Result;
use clap::Parser;

#[derive(Debug, Parser, Default, PartialEq, Eq)]
#[clap(about = "Login to substore")]
pub struct Options {
    #[clap(long = "token", help = "Substore Account Token")]
    pub token: Option<String>,
    #[clap(long = "email", help = "Substore Account Email")]
    pub email: Option<String>,
    #[clap(long = "password", help = "Substore Account Password")]
    pub password: Option<String>,
}

pub async fn run(options: Options) -> Result<()> {
    let init_token = if Options::default() != options {
        cli_auth::run(options).await;
    };

    // TODO: Implement token login

    Ok(())
}