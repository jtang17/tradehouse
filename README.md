# Best Global Marketplace

> A broadcasting platform for live streaming and trading goods on a marketplace.

Deployed at https://www.bestglobalmarket.com

## Table of Contents

1. [Requirements](#requirements)
2. [Installing Dependencies](#installing-dependencies)
3. [Team](#team)
4. [Contributing](#contributing)
5. [Additional Info](#additional-info)

## Requirements / Recommended

- Node 8.9.3
- Java 8
- Elastic Search 6.1.0
- MySQL
- Nodemon

## Tech Stack
- React + Redux
- Node + Express
- MySQL
- Elastic Search

## Dev Tech Stack
- CircleCI
- Digital Ocean

### Installing Dependencies

Ensure that Nodemon is installed to use be-start.  Then, from within the root directory:

```sh
npm install
npm run be-start
```

### API Routes

There are five main API endpoints:
- /api/customers/
- /api/merchants/
- /api/products/
- /api/search/
- /api/streams/

For more details, see API routes in files within the /server/routes directory and the corresponding endpoints.

## Team

  - __Development Team Members__: Anton Shtylman, Chucky Bennett, Brian Leung, Jonathan Tang

## Contributing

This project uses the Airbnb style guide. See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

## Additional Info

1. A Stripe API key is required for using Stripe as a payment processor.
2. Auth0 is used for authentication.  To use your own authentication account, create an Auth0 account and edit the /client/src/Auth/Auth0-variables.js file.
3. For search functionality, hosting elastic search is required.
4. Sample seed data can be found in the /seeding/ directory.  To run the seeding script present:
```sh
node seeding/script.js
```

Merchants can submit their embedded recorded or livestream URLs through YouTube, Twitch or other services. e.g. https://www.youtube.com/embed/live_stream?channel=UCu3pDheBV5chOddcuOSqTnw or https://player.twitch.tv/?channel=datjoncat&muted=true