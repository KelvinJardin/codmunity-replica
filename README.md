# Replica of Codmunity app using Next.js and Tailwind CSS
Educational purposes only

## Getting Started

Setup your environment by installing the dependencies:

```bash
pnpm install
```

and your .env

```bash
cp .env.dist .env
npx auth secret
```

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Setup database

```bash
npx prisma init --datasource-provider sqlite
npx prisma migrate dev
```

## OAuth setup
On first time setup of this project you need to create a new OAuth application on GitHub.

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Click on "New OAuth App"
3. Fill in the form with the following details:
   - Application name: Codmunity-replica
   - Homepage URL: http://localhost:3000
   - Authorization callback URL: http://localhost:3000/api/auth/callback/github
