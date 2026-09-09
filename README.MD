`src` -> all the actual source code will reside, but not include any kind of tests

    inside src folder:-

- `confing` -> everything regarding any configuration or setup a library or module will be done -
  for ex: `dotenv` so that use env.. variable everywhere in cleaner fashion

- `routes` -> register routes and corresponding middlewares and controllers to it.

- `middlewares` -> they are just going to intercept the incoming requests where we can write our validators, authenticators etc.

- `controllers` -> they are kind of like last middlewares as post them you call your business layer to excecute the business logic. In contrllers we receive the incoming requests and data and then pass it to the business layer, once the business layer returns the output, we structure the API response in controllers and send the output.

- `repositories` -> this folder contains all the logic using when we interact the DB by writing queries, all the raw queries or ORM queries will go here.

- `services` -> contains the business logic and interacts with repositories for data from the database

- `utils` -> contains helper methods, errors classes etc.

### Setup the project

- Download the template from github and open it any code editor.
- In the root directory create a `.env` file and add the following env variables
  ```
      PORT=<port number of your choice>
  ```
  ex:
  ```
      PORT=3000
  ```
- Inside the `src/config` folder create a file named as `config.json` and write the following code:

```
{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```

- If you are setting your dev env, then write the username of your db, password of your db and in dialect mention whatever db you are using for ex: mysql, mariadb etc.
- If you're setting up test or prod env, make sure you replace the host with the hosted db url.
