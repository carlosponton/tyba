# tyba

Test para tyba

## Env
```shell
APP_ID=tyba
PORT=3000
LOG_LEVEL=debug
REQUEST_LIMIT=100kb
SESSION_SECRET=
TOKEN_SECRET=
GOOGLE_KEY=

# Database
MONGO_USERNAME=
MONGO_PASSWORD=
MONGO_HOSTNAME=
MONGO_PORT=
MONGO_DB=
```

## Get Started


## How do I modify the example API and make it my own?

There are two key files that enable you to customize and describe your API:
1. `server/routes.js` - This references the implementation of all of your routes. Add as many routes as you like and point each route your express handler functions.

## Install Dependencies

Install all package dependencies (one time operation)

```shell
npm install
```

#### Run in docker:

Compiles the application and starts it in production production mode.

```shell
docker-compose up
```

## Try It
* Open your browser to [http://localhost:3000](http://localhost:3000)
* Invoke the `/restuarant/history` endpoint 
  ```shell
  curl --location --request GET 'http://localhost:3000/api/v1/restaurant/history' --header 'Authorization: Bearer token'
  ```
* Invoke the `/restuarant/nearvy` endpoint 
  ```shell
  curl --location --request GET 'http://localhost:3000/api/v1/restaurant/nearvy?latitude=-33.8670522&longitude=151.1957362' --header 'Authorization: Bearer token'
  ```
  
* Invoke the `/auth/login` endpoint 
  ```shell
  curl --location --request POST 'http://localhost:3000/api/v1/auth/login' --header 'Content-Type: application/json' --data-raw '{
    "username": "ponton",
    "password": "123456"
    }'
  ```
  
* Invoke the `/auth/signup` endpoint 
  ```shell
  curl --location --request POST 'http://localhost:3000/api/v1/auth/signup' --header 'Content-Type: application/json' --data-raw '{
    "username": "ponton",
    "password": "123456"
  }'
  ```

   
