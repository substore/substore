use anyhow::{anyhow, Result};
use reqwest::header::HeaderMap;
use reqwest::Client;
use serde::{Deserialize, Serialize};

use crate::config::CLI_VERSION;

#[derive(Debug, Deserialize)]
pub struct Base<T> {
    pub success: bool,
    pub data: T,
}

#[derive(Debug, Deserialize)]
pub struct ErrorContent {
    pub code: String,
    pub message: String,
}

#[derive(Debug, Deserialize)]
pub struct ErrorResponse {
    pub error: ErrorContent,
}

#[derive(Debug, Serialize)]
struct GraphQLQuery<'a> {
    query: &'a str,
    variables: serde_json::Value
}

#[derive(Debug, Clone)]
pub struct HttpClient {
    pub client: Client,
    pub headers: HeaderMap,
    pub url: String,
    pub ua: String, // user agent
}

impl HttpClient {
    pub fn new() -> Self {
        let mut headers = HeaderMap::new();
        headers.insert("accept", "application/graphql".parse().unwrap());
        
        let ua = format!("substore_cli/{} on {}", CLI_VERSION, std::env::consts::OS);

        Self {
            client: Client::builder()
                .user_agent(ua.clone())
                .default_headers(headers.clone())
                .build()
                .unwrap(),
            headers,
            url: "http://localhost:4000/graphql".to_string(),
            ua,
        }
    }

    pub async fn handle_res<T>(&self, res: reqwest::Response) -> Result<Option<T>>
    where
        T: serde::de::DeserializeOwned,
    {
        let status = res.status();
        let text = res.text().await?;

        if status.is_success() {
            let data: Base<T> = serde_json::from_str(&text)?;
            Ok(Some(data.data))
        } else {
            let data: ErrorResponse = serde_json::from_str(&text)?;
            Err(anyhow!(data.error.message))
        }
    }

    pub async fn request<T>(&self, query: &str, variables: Option<(serde_json::Value, &str)>) -> Result<Option<T>> 
    where
        T: serde::de::DeserializeOwned,
    {
        // graphql
        let mut request = self.client.post(&self.url);

        if let Some((body, content_type)) = variables {
            request = request.header("content-type", content_type);

            let req_body = GraphQLQuery { query, variables: body };
            request = request.json(&req_body);
        }

        let request = request.build()?;

        let now = tokio::time::Instant::now();

        let res = self.client.execute(request).await?;

        let elapsed = now.elapsed();

        println!("Request took: {:?}", elapsed);

        self.handle_res(res).await
    }
}