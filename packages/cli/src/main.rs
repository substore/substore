#![warn(clippy::pedantic)]

use anyhow::Result;

#[tokio::main]
async fn main() -> Result<()> {
    substore::run().await?;

    Ok(())
}