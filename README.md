# Save-Snippet

## Application Overview

Save Snippet is a tool used by developers to store code for future reference.  The goal of this project was to created a fully functioning **"MERN"** (MongoDB, Express, React, NodeJS) web application.

Link to the live application: [https://spwisner.github.io/save-snippet](https://spwisner.github.io/save-snippet).

Link to the API Source: [https://github.com/spwisner/save-snippet-api](https://github.com/spwisner/save-snippet-api).

Application Screenshot:
![alt text]("https://user-images.githubusercontent.com/13546265/28041611-1d2afc2a-6598-11e7-806f-8c24b1b36e60.png" "Application Screenshot")

## Technologies Used

This SPA utilizes the following technologies

-   MongoDB (view save-snippet-api repository)
-   Express (view save-snippet-api repository)
-   NodeJS
-   JavaScript
-   JSX
-   Fetch

## Application Approach & Design

When designing the application, user stories and wireframes were created to ensure that the app would provide the most essential features.

### User-Stories
The following is a sample of user stories that were considered in the production of the application.

1. As a user, I was to be able to search for code snippets
2. As a user, I would like to be able to create, update, delete, and view snippets
3. As a user, I would like the format of my submitted code to be preserved

### Dependencies

The whatwg-fetch npm package was utilized as an alternative to AJAX requests via jQuery.

Installation was completed via a single npm method:
<!--  -->
```
npm install whatwg-fetch --save
```

### Application Limitations & Unresolved Problems

The primary limitation of this application is its simplicity.  There are countless web applications that perform the same function (e.g. Gisto) and offer several other features.  However, the goal of this project was to create a MERN application for demo purposes and not to outperform existing snippet applications.
