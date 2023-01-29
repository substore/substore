pub mod httpclient;

use self::httpclient::HttpClient;

#[derive(Debug)]
pub struct State {
    pub http: HttpClient,
}

impl State {
    pub async fn new() -> Self {
        Self {
            http: HttpClient::new(),
        }
    }
}