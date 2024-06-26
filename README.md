# Education Management Application

![Node.js](https://camo.githubusercontent.com/85cba226a1290d078f1a437aa87cb872a5bdb30037fa96b8afcddf163cd5b328/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d4e6f64652e6a7326636f6c6f723d333339393333266c6f676f3d4e6f64652e6a73266c6f676f436f6c6f723d464646464646266c6162656c3d)
![MySQL](https://camo.githubusercontent.com/43cb8083b53aaf9847087cc27dcc556a66b7b1f32ca77c3091aed2e3f9c2c277/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d4d7953514c26636f6c6f723d343437394131266c6f676f3d4d7953514c266c6f676f436f6c6f723d464646464646266c6162656c3d)
![Express.js](https://camo.githubusercontent.com/dd688eaaa262ca0022a159962f55bfd35cababef5df983fb2b3c136e62256b5e/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d4578707265737326636f6c6f723d303030303030266c6f676f3d45787072657373266c6f676f436f6c6f723d464646464646266c6162656c3d)
![Sequelize](https://camo.githubusercontent.com/b4637d1df0ccfefc5971f0afab56330893bb86fc1b5299cb3fb3bc391ca24115/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d53657175656c697a6526636f6c6f723d323232323232266c6f676f3d53657175656c697a65266c6f676f436f6c6f723d353242304537266c6162656c3d)
![Bulma](https://camo.githubusercontent.com/348c91cfe1d49e26bd9bd0023f4b3ec4dfa91ce207947f23bca13f813801e961/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d42756c6d6126636f6c6f723d323232323232266c6f676f3d42756c6d61266c6f676f436f6c6f723d303044314232266c6162656c3d)

## Built With

- Node.js
- MySQL
- Express
- Sequelize
- Handlebars
- Bulma CSS

## Description

The education management application was built with Express as the web framework, sequelize as the ORM, handlebars for the templating engine to Express, and Bulma CSS for the styling of the application. This application lets teachers manage their courses by adding new ones and listing their current courses, as well as the students in each course.

## Table of Contents

- [Education Management Application](#education-management-application)
  - [Built With](#built-with)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Visuals](#visuals)
  - [Tests](#tests)
  - [Credits](#credits)
  - [References](#references)
  - [License](#license)
  - [Contributing](#contributing)
  - [Badges](#badges)

## Installation

You can run this application locally by following the steps below. You can also visit the live website [here](https://education-management-182b736245a7.herokuapp.com/)

- Download Node.js at [Node.js](https://nodejs.org/en) if not already installed. You can check if it is installed by typing `node-v` in your command line.
- Fork the repo to make a copy.
- Next, clone the project using `git clone https://github.com/KevinKiely/Education-Management-Application.git`.
- To install dependencies, make sure you're in the root of the project and run `npm install`.
- In the root of the directory create a `.env` file with your database credentials that match `env.EXAMPLE`.
- in a terminal window navigate to the root of the project directory and run `mysql -u root -p`.
- Once inside the MySQL shell run `source db/schema.sql;`
- In a terminal window run the command `npm run seed` to seed the database with dummy data.

## Usage

- Sign up as a teacher with a name, email, and password.
- After signing up you'll be logged in and you can create courses.
- You can go to your profile page to see your name, and a list of courses that you teach.
- You can also add students to courses. (Might not be implemented yet)

## Visuals

<img width="650" alt="screenshot" src="https://github.com/KevinKiely/Education-Management-Application/assets/29121238/ecde0642-af3b-4ed6-aa82-4acee9457505">


## Tests

N/A

## Credits

Kevin Kiely, Brandon Pouliot, Ian Hart

## References

[Sequelize Documentation](https://sequelize.org/docs/v6/)
[Bulma Css Documentation](https://bulma.io/documentation/)

## License

This project is covered under MIT License

<details>
  <summary>
    License Text
  </summary>

```

Copyright (c) 2024  Kevin Kiely, Brandon Pouliot, Ian Hart

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

```

</details>

## Contributing

No contributions are being accepted at this time.

## Badges

[![GitHub license](https://img.shields.io/github/license/KevinKiely/Education-Management-Application)](https://github.com/KevinKiely/Education-Management-Application/blob/main/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/KevinKiely/Education-Management-Application)](https://github.com/KevinKiely/Education-Management-Application)
[![GitHub stars](https://img.shields.io/github/stars/KevinKiely/Education-Management-Application)](https://github.com/KevinKiely/Education-Management-Application/stargazers)
