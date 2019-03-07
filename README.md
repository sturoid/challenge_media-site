## Run Application
Place the dev.js file in the config folder so the Behance API key is present.
* react-only branch - Data layer uses React only.
* graphql branch - Data layer uses GraphQL with Apollo.

```
> npm install
> npm run dev
```

If concurrently doesn't run for some reason you might need to install it globally: 

```
> npm install -g concurrently
```

## Run Tests
```
> npm test
```

#### TODO
* GraphQL branch: Write jest tests for GraphQL resolvers.
* Redux branch: Rewrite data layer using Redux and push to branch.
* Redux branch: Test Redux resolvers and API endpoints.
* Test API endpoints for normal data fetches on master.
