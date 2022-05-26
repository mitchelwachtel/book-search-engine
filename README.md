# book-search-engine
## Mitchel Wachtel - mitchel.wachtel@gmail.com

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---
### Description
This app has the feature to be able to search using Google's Book Search API. Users are able to create a Login, or sign in to their already made account. Upon looking at their search results, users are able to add books to their saved directory. A book's information is saved to the MongoDB associated with this user. Users can view their saved books and delete items from their list.

This app originally had routes set up with RESTful APIs, but I have refactored this code to work through graphql.

---
### Table of contents
* [Installation](#installation)
* [Technology](#technology)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
---

### Installation
To install the dependencies necessary to run use the application, the user should run the following command first:

`npm i`

---

### Technology

Technologies used: MongoDB, React.js, node.js, npm, Express.js, dependencies: 'apollo-server-express', 'bcrypt', 'graphql', 'jsonwebtoken', 'mongoose', '@apollo/client', 'bootstrap', 'concurrently', and 'express'. Routes tested with Insomnia and written on VS Code.

---
### Usage
You must install dependencies for application to be functional.To open the application and explore locally, type "npm run develop" into the terminal.

Deployed at https://boiling-stream-54263.herokuapp.com/

When user is not logged in, save buttons don't appear.
![not Logged in](./assets/images/noLogin.png)

![no buttons](./assets/images/noButton.png)

Login model
![Login screen](./assets/images/login.png)

When user is logged in, save buttons appear - And user can view their saved Books and delete saves as well.
![add Button appears](./assets/images/addButton.png)

![saved Books](./assets/images/savedBooks.png)

![delete button](./assets/images/deleteButton.png)

![book deleted](./assets/images/deleteBook.png)

---
---
---
### License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Read more about the MIT License *[here](https://opensource.org/licenses/MIT)*.

---
### Contributing
Please contact mitchel.wachtel@gmail.com if you have any desire to contribute to this project.

---
### Tests
No tests are currently set up for this application.

---
### Questions
If you have any questions, please send me an email at mitchel.wachtel@gmail.com and I'll be quick to get back to you! You can also open an issue on GitHub. Find me on GitHub at https://github.com/mitchelwachtel if you are interested in any of my other work.



