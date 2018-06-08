# Calculator Using ReactJS and NodeJS
To demonstrate the use of stateless RESTful web services using simple Calculator application. 

```
Individual assignment for CMPE 273 - Enterprise Distributed Systems course during Software Engineering.
```

## Purpose
This calculator application is capable of handling following functions:

* Addition
* Subtraction
* Multiplication
* Division


> For Detailed Description check [Project Report](https://docs.google.com/document/d/1oX7vKfWftTV8vgo_s_IeOpl5158lZsKEFVypW7q8KHs/edit?usp=sharing)


## System Design
> Applications uses a simple Client-Server architecture

* Client Side : ReactJS (Redux, HTML5 and Bootstrap)
```
Consists of mainly 3 Components : CalculatorButton, CalculatorDisplay and Calculator.
```

* Server Side : NodeJS, ExpressJS
```
Consists of APIs to serve client requests.
```

## System Architecture
![Architecture](/Architecture.png)


## Frameworks / Libraries

| **Name** | **Description** |**Used**|
|----------|-------|---|
|  [React](https://facebook.github.io/react/)  |   Fast, composable client-side components.    | Frontend |
|  [Redux](http://redux.js.org) |  Enforces unidirectional data flows and immutable, hot reloadable store. Supports time-travel debugging. | Frontend |
|  [React Router](https://github.com/reactjs/react-router) | A complete routing library for React | Frontend |  Compiles ES6 to ES5. Enjoy the new version of JavaScript today.     | Frontend |
| [Axios](https://github.com/mzabriskie/axios) | Promise based HTTP client for the browser and node.js | Frontend |
| [Express](https://github.com/expressjs/express) | For creating the backend logic | Backend |
| [Babel](https://github.com/babel/babel) | Compiles ES6 into ES5 | General |
| [Webpack](http://webpack.github.io) | Bundles npm packages and our JS into a single file. | General |  
| [ESLint](http://eslint.org/)| Lint JS. Reports syntax and style issues. | General |


### Steps to run application:

* Go to path : \Calculator
* npm install
* npm run start-dev 

> This will start ReactJS server on 3000 port and NodeJS server will start at 3001 port.

## 📝 Author
[<img src="" align="right" height="100">](https://github.com/heyitsvajid)

##### Vajid Kagdi <kbd> [Github](https://github.com/heyitsvajid) / [LinkedIn](https://www.linkedin.com/in/heyitsvajid) / [E-Mail](mailto:vajid9@gmail.com)</kbd>
