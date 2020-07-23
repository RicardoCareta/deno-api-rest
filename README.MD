# deno-rest-api

A simple REST API with Deno and JWT Token Authentication

## Requirements

- [Deno.land](https://deno.land/) = 1.2.0

## Running

1. Clone this repository;
2. Move to the appropriate directory;
3. Create .env file on the root of the project with the same parameters as .env.example.
3. Run `deno run --allow-read --allow-env --allow-net index.ts` to install dependencies and execute.

## Routes

| Route                | Description                      |
| -------------------- | -------------------------------- |
| POST /user           | create a user                    |
| POST /login          | login with created user          |
| GET /user            | get all users when authenticated |

### Routes example

#### POST /user

**Send**

```json
{
  "username" : "usertest",
  "password" : "123456"
}
```

**Response**

```json
{
  "id": "0d7e2206-27b7-4531-8299-3e3da5bf5556",
  "username": "usertest",
  "password": "123456"
}
```

#### POST /login

**Send**

```json
{
  "username" : "usertest",
  "password" : "123456"
}
```

**Response**

```json
{
  "token": "a jwt token"
}
```


#### GET /users

**Send Header**

| Parameter            | Value                            |
| -------------------- | -------------------------------- |
| authorization        | Bearer {a jwt token}             |


**Response**
```json
[
  {
    "id": "0d7e2206-27b7-4531-8299-3e3da5bf5556",
    "username": "usertest",
    "password": "123456"
  }
]
```

## License
[MIT](https://choosealicense.com/licenses/mit/)