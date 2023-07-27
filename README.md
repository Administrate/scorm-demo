# Content Player Demo

[![Netlify Status](https://api.netlify.com/api/v1/badges/307a88fa-e1c3-43fd-9aa6-342c7bf07ecf/deploy-status)](https://app.netlify.com/sites/scorm-demo/deploys)

A sample React SPA that connects to [Sean's Staging san TMS](https://san.stagingadministrateapp.com) and LMS Portal to
showcase our embedded widgets.

Built using Astro, Tailwind, pnpm, Shadcn-ui, and React.

## Configuration

All configuration is done at build time to connect to a specific instance. (See ./src/components/config.ts)

- Configure Public/Private Key authentication to generate an access token
  - Private Key was used to generate the JWT used.
  - Public Key shared/stored in the TMS.
- Portal URL of the specified Brand's Portal
- Using a specific Event and content (can replace this with learning tag query)

## Development

Make sure you are on NodeJS v18 and have pnpm installed, then you can:

```sh
pnpm install
pnpm run dev
```

To get the app running locally.
