pub const CLI_VERSION: &str = env!("CARGO_PKG_VERSION");

#[cfg(not(windows))]
pub const CLI_NAME: &str = "substore";
#[cfg(windows)]
pub const CLI_NAME: &str = "substore.exe";