[![Known Vulnerabilities](https://snyk.io/test/github/mrm8488/errorgiphy-service/badge.svg)](https://snyk.io/test/github/mrm8488/errorgiphy-service)
# errorGiphy-service
# A Microservice based on Linux bash's commands to get a funny gif for HTTP response codes
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
npm run start
```
if we do not set a port to be used for the node app, the default port is **3000**.
Then we have to do a request like:

### Endpoint / -> returns OK meaning that the service is up and working!
### Endpoint /:code -> returns an "img" (HTML element) that you can embed in your response page or a json with the gif url like this
```js
{ success: true,
 gifUrl: "https://media1.giphy.com/media/Rkis28kMJd1aE/giphy.gif"
 }
```

[Live demo for status 200](https://errorgiphy-service.herokuapp.com/200)

[Live demo for error 404](https://errorgiphy-service.herokuapp.com/404)

[Live demo for error 500](https://errorgiphy-service.herokuapp.com/500)



## What is the core?
The following Linux bash's commands (yes, I love bash):

```sh
curl -s https://giphy.com/search/<your_query>?sort=relevant | grep '"original":' | tr "," "\n" | grep '^ \"url' | cut -f1 -d "?" | grep ".gif"$ | head -4 | tail -1 | cut -f3 -d " " | tr -d '"'
```


