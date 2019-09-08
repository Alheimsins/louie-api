# louie-api

The one and only api for louie

# API

## `GET /api/groups`

## `GET /api/students`

## `GET /api/document`

## `POST /api/document/send`

## `POST /api/document/generate`

```
{
  "data": {
    "date": "1971-11-18"
  },
  "template": {
    "header": [
      {
        "fontSize": 12,
        "text": "${date}",
        "startAt": {
          "x": 450,
          "y": 50
        }
      },
      {
        "fontSize": 20,
        "text": "Varsel om mulig nedsatt ordenskarakter",
        "startAt": {
          "x": 100,
          "y": 80
        }
      }
    ],
    "body": [
      {
        "fontSize": 14,
        "text": "Du har vært slem. Fy!",
        "startAt": {
          "x": 100,
          "y": 150
        }
      },
      {
        "fontSize": 14,
        "text": "Ikke vær slem"
      }
    ],
    "footer": [
      {
        "fontSize": 12,
        "text": "Alheimsins International School of Awesomeness",
        "startAt": {
          "x": 100,
          "y": 700
        }
      }
    ]
  }
}
```

```
$ curl http://localhost:3000/api/documents/generate -d @test/data/template-data.json --header "Content-Type: application/json" > document.pdf
```

# License

[MIT](LICENSE)