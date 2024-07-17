## Application Programming Interface

## Get example data

### Request

`GET /v1/data/`

    curl -i -H 'Accept: application/json' http://localhost:1337/v1/data/

### Response

    HTTP/1.1 200 OK
    Date: Wed, 17 Jul 2024 13:37:00 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 1337

    [
        {
          id: 1337,
          title: "Rutsuo",
          description: "Hello, World! ✨",
          avaiable: true,
        }
    ]
