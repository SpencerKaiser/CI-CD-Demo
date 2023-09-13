## CI-CD Demo

Prepared for Texas A&M

### Prerequisites

- Node 18
- [Yarn v1](https://classic.yarnpkg.com/lang/en/)

### Setup

1.  Install dependencies

    ```zsh
    yarn
    ```

2.  Copy `.env.sample` to `.env.local`

    ```zsh
    cp .env.sample packages/.env.local
    ```

3.  Run the app with `yarn dev` and start developing

### Containerization

CI-CD Demo is containerized to make deployment efficient and to prevent vendor-dependence for our cloud environment

#### Building and Running Docker Locally

1. Installing relevant dependencies
1. Duplicate `.env.docker.sample` as `.env.docker` and modify values as needed
1. Downloading [Docker Desktop](https://docs.docker.com/desktop/) and start it
   - Optionally modify `Settings > Resources > Advanced` to provide more resources to Docker and speed up your build commands
1. Run `yarn docker:build` from the root to build your image
1. Run `yarn docker:run` to start your container
1. Visit `localhost:3001` to use the app running in Docker

##### Environment Variables

`.env.local` is used as the base for all environment variables but `.env.docker` will override any specified environment variables as needed.

###### Troubleshooting

If you are unable to start your Docker app, make sure the steps above have been followed, then:

- Check the accuracy of your `.env.docker` and `.env.local` values (the former will override the latter)
- Make sure no quotes are used in either file; Docker does not remove them and your value will include them
- You can use Docker Desktop to inspect the environment: `Docker Desktop > Containers / Apps > cicd-demo` (environment variables can be found on the `Inspect` tab)
