#  <%= props.name %>
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

This app was bootstrapped using the Ignite React App Boilerplate ("Bob") for [Ignite React App](https://github.com/bjonamu/ignite-react-app).

## :arrow_up: How to Setup

**Step 1:** git clone this repo:

**Step 2:** cd to the cloned repo:

**Step 3:** Install the Application with `yarn` or `npm i`


## :arrow_forward: How to Run App

1. cd to the repo
2. Run `yarn start` or `npm run start`

## Repo walkthrough


Your `src` folder is where most of the goodies are found in an Ignite React App that was created using Create React App. Let's walk through them in more detail. Start with `src/index.js` (described below) and work your way down the walkthrough in order.

### Layouts

This boilerplate uses the methodology described [here](https://css-tricks.com/react-router-4/). Layout components are generally associated with the application routing and they take advantage of the Dynamic Routing concept of [React Router v4](https://reacttraining.com/react-router/web/guides/philosophy).

To generate a new Layout you can use the following generator commands:

```
ir-app layout Products
```

### Containers

This boilerplate makes use of the methodology discussed by Dan Abramov [here](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0). Containers are components that are concerned with how things work. 

Container components:

* Are concerned with how things work.
* May contain both presentational and container components** inside but usually don’t have any DOM markup of their own except for some wrapping divs, and never have any styles.
* Provide the data and behavior to presentational or other container components.
* Execute GraphQL mutations, queries && subscriptions
* Are often stateful, as they tend to serve as data sources.
* Examples: UserPage, FollowersSidebar, StoryContainer, FollowedUserList.

To generate a new Container you can use the following generator commands:

```
ir-app container Comment
or
ir-app cont Comment
```

### Components

Again borrowing from Dan Abramov's approach. Components are presentational components and they are concerned with how things look.

To generate a new Component you can use the following generator commands:

```
ir-app component Comment
or 
ir-app comp Comment
```

### Storybook

[Storybook](https://storybook.js.org/) has been setup to show off components in the different states. Storybook is a great way to develop and test components outside of use in your app. Simply run `npm run storybook` or `yarn storybook` to get started. All stories are contained in the `*.story.js` files along side the components.

### Themes

Styling themes used throughout your app styles.

* `Colors.js` - defined colors for your app
* `Metrics.js` - useful measurements of things like navBarHeight

### Config

Initialize and configure things here.

* `AppConfig.js` - simple app configuration here
* `DevConfig.js` - define how you want your development environment to act

### Fixtures

Contains json files that mimic API responses for quicker development. These are used by the `Services/FixtureApi.js` object to mock API responses.

### GraphQL Queries, Mutations

Contains a pre-configured Queries and Mutations setup.

Here again we have generators to help you out. You just have to use one of the following:

* `ir-app mutation Amazing` - Will generate the mutation for `Amazing`.
* `ir-app query Amazing` - Will generate the query for `Amazing`

### Services

Contains your API service and other important utilities for your application.

Add your other services here e.g. Bugsnag, Algolia

* `Api.js` - main API service, giving you an interface to communicate with your back end
* `FixtureApi.js` - mocks your API service, making it faster to develop early on in your app

### Lib

We recommend using this folder for modules that can be extracted into their own NPM packages at some point.

### Images

Contains actual images (usually png) used in your application.

### Utils

Helpers for transforming data between API and your application and vice versa. An example is provided that you can look at to see how it works.

### Extras

#### Generating multiple files

In a situation were you want to create a component, container, redux or saga or any variations of these you can run the following commands

* `ir-app gen cont comp mutation Login` - Will generate the container, component and mutation for `Login`.
* `ir-app g comp cont query User` - This will generate a component, container and query for User.

#### Loading async components

```js
import Loadable from 'react-loadable'
const Button = Loadable({
  loader: () => import('../Components/Button/Button'),
  loading: () => <div>loading...</div>
});
```
