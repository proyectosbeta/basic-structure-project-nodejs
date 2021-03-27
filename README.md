# Basic structure project in NodeJS
A basic structure for a project in Nodejs.

# Tecnologies

- NodeJS 14.16.xx
- NPM 7.6.xx
- Yarn 1.22.x

# Development

## Install

```
yarn install
```

## Start server

```
yarn start
```

# Http code
- `200 Request` - ok

## Testing

### With jest

- [Oficial site](https://jestjs.io/)
- [Documentation](https://jestjs.io/docs/en/getting-started) 
- [API](https://jestjs.io/docs/en/api)
- [Expect](https://jestjs.io/docs/en/expect)

```
yarn test
```

or

```
yarn --watchAll
```

## Documentation

### Access

- [Oficial site](http://localhost:3000/api-docs)

# Production

## Build

```
yarn build
```

Use pm2

## Install

```
yarn global add pm2
```

## Use

### Start an app

```
pm2 start dist/bundle.js --name basic-structure-project-nodejs-service
```

### Managing processes

#### Restart

```
pm2 restart basic-structure-project-nodejs-service
```

#### Reload

```
pm2 reload basic-structure-project-nodejs-service
```

#### Stop

```
pm2 stop basic-structure-project-nodejs-service
```

#### Delete

```
pm2 delete basic-structure-project-nodejs-service
```

### List managed applications

```
pm2 list
```

### Display logs

```
pm2 logs
```

### Terminal Based Dashboard

```
pm2 monit
```

## Cluster mode

For Node.js applications, PM2 includes an automatic load balancer that will share all HTTP[s]/Websocket/TCP/UDP connections between each spawned processes.

```
pm2 start app.bundle.js --name basic-structure-project-nodejs-service -i max
```

## Setup startup script

```
pm2 startup
```
