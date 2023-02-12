use std::convert::Infallible;

use anyhow::{anyhow, Result, Context};
use hyper::{Body, Request, Response};
use tokio::sync::mpsc::Sender;

pub async fn browser_login() -> Result<String> {
    let port = portpicker::pick_unused_port().context("Failed to pick unused port")?;

    let url = format!("http://localhost:{}/auth", port);

    if let Err(e) = webbrowser::open(&url) {
        println!("Failed to open browser: {}", e); 

        dialoguer::Password::new()
            .with_prompt("Token")
            .interact()
            .map_err(|why| anyhow!(why))
    } else {
        Ok("".to_string())
    }
}