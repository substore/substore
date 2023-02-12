use super::Options;

pub async fn run(options: Options) -> String {
    match options {
        Options { token: Some(_), .. }
        | Options {
            email: None,
            token: None,
            ..
        } => {
            if options.token.is_none() || options.token.as_ref().unwrap().is_empty() {
                dialoguer::Password::new().with_prompt("Token").interact().expect("Error getting token")
            } else {
                options.token.unwrap()
            }
        }

        Options {
            email: Some(email),
            password: None,
            .. 
        }
        | Options {
            email: Some(email),
            password: Some(_),
            ..
        } => {
            // email login
            let password = if options.password.is_none() || options.password.as_ref().unwrap().is_empty() {
                dialoguer::Password::new()
                    .with_prompt("Password")
                    .interact()
                    .expect("Error getting password")
            } else {
                options.password.unwrap()
            };

            creds_login(email, password).await
        }
    }
}

async fn creds_login(email: String, password: String) -> String {
    todo!("Implement creds_login")
}