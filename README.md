[![Known Vulnerabilities](https://snyk.io/test/github/mrm8488/errorgiphy-service/badge.svg)](https://snyk.io/test/github/mrm8488/errorgiphy-service)
# errorGiphy-service
# A Microservice based on bash's commands to get a funny gif in HTTP error cases:
## we manage the following codes by now:
- 200
- 201
- 204
- 400
- 403
- 404
- 500
- 503

## How to use:

```js
npm i
node index
```
if we do not set a port to be used for the node app, the default port is 3000.
Then we have to do a request like:
### http://localhost:3000/:code -> return a "img" (HTML element) that you can embed in your response page.
### http://localhost:3000/ -> return OK meaning that the service is up and working!

[Live demo for status 200](https://errorgiphy-service.herokuapp.com/200)
[Live demo for error 404](https://errorgiphy-service.herokuapp.com/404)
[Live demo for error 500](https://errorgiphy-service.herokuapp.com/500)



## What is the core?
The following bash's commands (yes, I love bash):

```sh
curl -s https://giphy.com/search/<here_your_query>?sort=relevant | grep url | head -n 1 | tr -s " " | cut -f4 -d " " | cut -f2 -d "=" | tr -d ">"`
```


