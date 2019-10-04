# louie-api

The one and only api for louie

# API

## `GET /api/groups`

## `GET /api/students`

## `GET /api/students/:id`

## `GET /api/students/:id/documents`

## `GET /api/documents`

## `POST /api/documents/send`

## `POST /api/documents/generate/base64`

## `POST /api/documents/generate`

## `/api/grapqhl`

The graphql interface for louie

```
$ curl http://localhost:3000/api/documents/generate -d @test/data/template-data.json --header "Content-Type: application/json" > document.pdf
```


## Development

Add a local `.env` file

```
MONGODB_CONNECTION=your-mongodb-connection
MONGODB_TJOMMI_COLLECTION=name-for-tjommi-collection
MONGODB_LOGS_COLLECTION=name-for-logs-collection
MONGODB_NAME=mongodb-name
PDF_SERVICE_URL=url-for-generating-pdf
```

Start the development server

```
$ npm run dev
```

# Related
- [louie-frontend](https://github.com/Alheimsins/louie-frontend) - frontend for the louie services
- [louie-template-to-pdf](https://github.com/Alheimsins/louie-template-to-pdf) - service for generating pdfs from templates

# License

[MIT](LICENSE)
