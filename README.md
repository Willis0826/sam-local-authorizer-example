# sam-local-authorizer-example

This repository demos how to use SAM CLI with Lambda Authorizer locally.

## Requirement

1. Nodejs 18
2. esbuild
3. Docker
4. SAM CLI 1.94.0

If you haven't install `esbuild`, you can run the following command to install it.

```bash
npm install -g esbuild
```

## Start Dev Server

Wicked, you are ready to start SAM dev server locally and test the result.

```bash
$ sam build
$ sam local start-api
$ curl -H "Authorization: abc" http://127.0.0.1:3000/ping
```

Now, you should get a response `pong` after you sent a GET request to `/ping`. Please note, you must provide `Authorization` header in the request in order to pass Lambda Authorizer.

If you send a request without `Authorization` header, you will get a response `{"message":"Unauthorized"}`.

🍺 Cheers, that's all.

## Contribution

Please feel free to create a PR or an Issue if you find anything can be improved.