# Watch List REST API Node.jS

Watch list API to creat a Watch list for movies or serieses and retrieve them and apply CRUD operations on them .

## Features

- Register / Login . 
- Adding movies or serieses to the Watch List .
- Updating and Changing the list and also update and modify each element in it .

## Tech Stack

**Server:** Node, Express , MongoDB

**Packages Used:** JSON Web Token "JWT" , bcryptjs , http-status-codes , express-async-errors , mongoose


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGO_URI`

`JWT_SECRET`

`JWT_LIFETIME`

## API Reference

#### Login

```http
  POST /api/v1/auth/login
```

| Parameter | Type | Description |
| :-------- | :--- | :---------- |

#### Register

```http
  POST /api/v1/auth/register
```

| Parameter | Type | Description |
| :-------- | :--- | :---------- |

#### Get all movies

```http
  GET /api/v1/Movies
```

| Parameter | Type | Description |
| :-------- | :--- | :---------- |

#### Create movie

```http
  POST  /api/v1/Movies
```

| Parameter | Type | Description |
| :-------- | :--- | :---------- |

#### Get a single movie

```http
  GET  /api/v1/Movies/:id
```

| Parameter | Type      | Description                       |
| :-------- | :-------- | :-------------------------------- |
| `id`      | `integer` | **Required**. Id of item to fetch |

#### Delete movie

```http
  DELETE  /api/v1/Movies/:id
```

| Parameter | Type      | Description                       |
| :-------- | :-------- | :-------------------------------- |
| `id`      | `integer` | **Required**. Id of item to fetch |

#### Update movie

```http
  PATCH  /api/v1/Movies
```

| Parameter | Type      | Description                       |
| :-------- | :-------- | :-------------------------------- |
| `id`      | `integer` | **Required**. Id of item to fetch |
