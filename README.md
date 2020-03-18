[![Run on Repl.it](https://repl.it/badge/github/raguilera82/api-back-nodejs)](https://repl.it/github/raguilera82/api-back-nodejs)

[![Total alerts](https://img.shields.io/lgtm/alerts/g/raguilera82/api-back-nodejs.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/raguilera82/api-back-nodejs/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/raguilera82/api-back-nodejs.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/raguilera82/api-back-nodejs/context:javascript)

# API Back NodeJS

This API provides samples to connect with frontend applications in a teaching environment.

## Available APIs

### User APIs

#### POST `/auth`

You can do a POST to `/auth` to obtain a new token.

The body must have:

* `username`: The username
* `password`: The password

It returns the following:

```json
{
  "expires_in": xxx,
  "access_token": {jwt}
}
```

The `expires_in` indicates when the token expired and `access_token` are signed with the secret key and will contain the `username`.

#### GET `/api/random-quote`

It returns a String with a Random quote from Chuck Norris. It doesn't require authentication.

#### GET `/api/protected/random-quote`

It returns a String with a Random quote from Chuck Norris. It requires authentication. 

The JWT - `access_token` must be sent on the `Authorization` header as follows: `Authorization: Bearer {jwt}`

#### GET `/api/public/users`

It returns a List with JSONPlaceholder users. It doesn't require authentication.

Also, you are able to access information about github of three users:

##### GET `/api/public/users/extra/roland`
##### GET `/api/public/users/extra/raguilera82`
##### GET `/api/public/users/extra/jmsanchez`

#### GET `/api/protected/users`

It returns a List with JSONPlaceholder users. It requires authentication. 

##### GET `/api/protected/users/extra/roland`
##### GET `/api/protected/users/extra/raguilera82`
##### GET `/api/protected/users/extra/jmsanchez`

The JWT - `access_token` must be sent on the `Authorization` header as follows: `Authorization: Bearer {jwt}`

## Running it

Just clone the repository, run `npm install` and then `npm run start`. That's it :).

If you want to run it on another port, just run `PORT=3001 npm run start` to run it on port 3001 for example.
