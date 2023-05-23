# Creating random troops - Goodgame Coding Challenge

This application is created to show coding skills to the Goodgame (company). The application is developed using React.js.

Created the project using Typescript. 

Wrote unit tests for the project components using Jest and Enzyme libraries.

Used the Tailwind, in order to, create responsive designs. I used Tailwind because it is really easy to use and it increases the readability of the codes.

Also added Webpack and Babel, in order to increase the appliction performance.

Added Eslint, and Prettier. Also, added Husky in order to prevent pushing badly formatted codes.

Also Dockerized all applications.


### The Problem

Every player in Empire has a castle. To let players attack another player’s castle, we need you to create armies of randomly distributed troops (a troop is a formation of soldiers with the same skill, such as Spearmen, Swordsmen, Archers, etc.)

For example, we'll call your code telling it we need a random army that's 167 men strong. Assuming our available unit types to be, for example, Spearmen, Swordsmen and Archers, what we want from you is that you tell us what such a random army would look like, e.g.

Our Input: 167
Example result:
 - 63 Spearmen
 - 57 Swordsmen
 - 47 Archers


###  Boundaries

* Each troop MUST be > 0
* The result MUST be different (non-deterministic) with each call. When we call your code 100 times with the same parameters, we expect 100 different results.
* Obvious biases in the result are strongly discouraged. An obvious bias would be if e.g. one troop type always is the largest (or smallest etc.)



## Table of Contents
- [Project Overview](#projectoverview)
- [Installation](#installation)
- [Test](#test)
- [Support](#support)
- [Contributing](#contributing)


### ProjectOverview

A short overview of the project

![GIF](./countries.gif)

## Installation
### with Docker
```sh
git clone https://github.com/mJiyan/good-game-coding-challange.git
cd good-game-coding-challange
docker-compose up --build
-> Open your browser at http://0.0.0.0:8080 
```

### manually
```sh
git clone https://github.com/mJiyan/good-game-coding-challange.git
cd good-game-coding-challange
yarn
yarn start

Open your browser at http://0.0.0.0:8080 
```


## Test
```sh
git clone https://github.com/mJiyan/good-game-coding-challange.git
cd good-game-coding-challange
yarn
yarn test
```


## Support

Please [open an issue](https://github.com/mJiyan/good-game-coding-challange/issues) for support & suggestions.


## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/mJiyan/good-game-coding-challange/compare).