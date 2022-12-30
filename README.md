<p align="center">
    <a href="https://github.com/substore/substore">
        <img height=300 alt="substore preview"
        src=![dashboard](https://user-images.githubusercontent.com/59238070/210085156-1f5d5d92-425b-4a82-ad29-a219980323a7.png)
"">
    </a>
    <h3 align="center">substore.io</h3>
    <p align="center">
        Deploy database & message-brokers with ease.
    </p>
</p>

## About

Substore is a platform for developers to deploy databases faster. With 
a simpler workflow, auto-templated databases, pre-configured policies & best practices. Developers can focus
on building products instead of infrastructure.

*Currently this platform is in development, with focus on the web dashboard.*

## Folder breakdown
- [backend](https://github.com/substore/substore/tree/main/packages/backend) the backend of substore, has authentication, and etc logic
- [provisioner](https://github.com/substore/substore/tree/main/packages/provisioner) the provisioner is a important part of this repo, it deploys databases via a docker image to a fly.io machine
- [sms](https://github.com/substore/substore/tree/main/packages/sms) handles sms via Twillio
- [email](https://github.com/substore/substore/tree/main/packages/email) handles stuff like verification codes, and other emails from substore using Twillio
- [types](https://github.com/substore/substore/tree/main/packages/types) these are shared types used accross the project for various packages.
- [dashboard](https://github.com/substore/substore/tree/main/apps/dashboard) web dashboard for substore, in nextjs & react.
- [www](https://github.com/substore/substore/tree/main/www) landing page in astro

## Getting started

To get started, checkout this Craft document to setup your system for development.
If you have any questions message me on threads (@andrew)
