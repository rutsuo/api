## Application Programming Interface

## Get example data

### Request

`GET /v1/data/`

    curl -i -H 'Accept: application/json' http://localhost:1337/v1/data/

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2

    [
        {
          id: 1337,
          title: "Rutsuo",
          description: "Hello, World! ✨",
          avaiable: true,
        }
    ]
