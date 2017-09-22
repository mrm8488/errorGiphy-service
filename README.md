[![Known Vulnerabilities](https://snyk.io/test/github/mrm8488/errorgiphy-service/badge.svg)](https://snyk.io/test/github/mrm8488/errorgiphy-service)
# errorGiphy-service
# A Microservice to get a funny gif in HTTP error cases:
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
### http://localhost:3000/:code
### http://localhost:3000/ -> return OK meaning that the service is up and working!

