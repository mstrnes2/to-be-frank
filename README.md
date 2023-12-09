# To Be Frank

## Overview

To Be Frank is a web application designed to pair you with your desired fast food hotdog. Upon opening the application, the user must either login or sign up if they are a new user. After the user is signed in, they will be prompted with several quiz questions to narrow down which fast food restaurant offers the type of hotdog most closely associated with the user's answers. Once the quiz is completed, a profile page will load with one or more fast food restaurant suggestions as well as links to each establishment. The user can then click the link to their desired restaurant or log out of the application.

## Approach

To Be Frank was devloped using React's component-based architecture to create a dynamic and interactive user experience. These self-contained, reusable components are employed throughout the various pages of application. A Node.js server is utilized with Express.js as the backend framework, leveraging GraphQL for efficient API queries. Apollo Server is used to create the GraphQL server. Apollo Server is a community-driven, open-source GraphQL server that works seamlessly with any GraphQL schema. To Be Frank uses a GraphQL schema defined in the typeDefs (type definitions) to specify the structure of the API, including data types and operations. The resolvers in this project provide the implementation for the operations defined in the typeDefs. They determine how data is fetched or mutated in response to GraphQL queries and mutations. For the backend, this project employs MongoDB as the database and Mongoose as the ODM to interact with MongoDB in a structured and convenient way. Our data structures are defined using Mongoose in the User.js file, and exported in the index.js file.

As far as security for this application, authentication is put in place through JWTs (JSON Web Tokens). These self-contained and digitally signed tokens are used to transmit information between the user and application in a secure manner. We followed JWT best practices, such as token expiration, token refresh mechanisms, and proper handling of token secrets to ensure the utmost security.

## Screenshot

![Screenshot of application](./client/public/screenshot.jpeg?raw=true)

## Application Link
