use serde::Deserialize;

#[derive(Deserialize, Debug)]
pub struct User {
    pub id: i32
}

#[derive(Deserialize, Debug)]
pub struct Database {
    pub id: i32
}