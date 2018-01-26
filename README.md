# API Back NodeJS

This API provides samples to connect with frontend applications in a teaching environment.

## Available APIs

### User APIs

#### POST `/users`

You can do a POST to `/users` to create a new user.

The body must have:

* `username`: The username
* `password`: The password
* `extra`: Some extra information you want to save from the user (It's a string). This could be a color or anything at all.

It returns the following:

```json
{
  "id_token": {jwt},
  "access_token": {jwt}
}
```

The `id_token` and `access_token` are signed with the secret located at the `config.json` file. The `id_token` will contain the `username` and the `extra` information sent, while the `access_token` will contain the `audience`, `jti`, `issuer` and `scope`.

#### POST `/sessions/create`

You can do a POST to `/sessions/create` to log a user in.

The body must have:

* `username`: The username
* `password`: The password

It returns the following:

```json
{
  "id_token": {jwt},
  "access_token": {jwt}
}
```

The `id_token` and `access_token` are signed with the secret located at the `config.json` file. The `id_token` will contain the `username` and the `extra` information sent, while the `access_token` will contain the `audience`, `jti`, `issuer` and `scope`.

### Available API

#### GET `/api/random-quote`

It returns a String with a Random quote from Chuck Norris. It doesn't require authentication.

#### GET `/api/protected/random-quote`

It returns a String with a Random quote from Chuck Norris. It requires authentication. 

The JWT - `access_token` must be sent on the `Authorization` header as follows: `Authorization: Bearer {jwt}`

#### GET `/api/public/users`

It returns a List with JSONPlaceholder users. It doesn't require authentication.

Also, you are able to access information about github of three users:

##### GET `/api/public/users/roland`
##### GET `/api/public/users/raguilera82`
##### GET `/api/public/users/jmsanchez`

#### GET `/api/protected/users`

It returns a List with JSONPlaceholder users. It requires authentication. 

The JWT - `access_token` must be sent on the `Authorization` header as follows: `Authorization: Bearer {jwt}`

## Running it

Just clone the repository, run `npm install` and then `node server.js`. That's it :).

If you want to run it on another port, just run `PORT=3001 node server.js` to run it on port 3001 for example.
