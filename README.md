# project__one

## k_api

### Start in production mode:
```
npm start
```

### Start in dev mode:
```
npm run dev
```


## API ROUTES  /api/bands

****
### **GET METHOD**
****
****


```
GET/api/bands
```
Return a list of Bands. Example:

```json
{"results": [
    {
        "name": "AC/DC",
        "origin": "Australia"
    },
    {
        "name": "Los ZIgarros",
        "origin": "Spain"
    }
    ]
}
```
****
****

You can use filters to get filtered searches.

You can use one or several filters at the same time.

 For Example:

```
GET/api/bands/?<filter>=<value>&<filter>=<value> etc.
```

```
Filters:

1. name=<name>

2 .origin=<origin>

3. skip=<number>

4. limit=<number>

5. fields=<name of field>

6. sort=<field of sort>
```

## **POST METHOD**
****
****
```
POST/api/bands
```
Create Band. Example:
```js
body: {
  name: 'FOO Fighters',
  origin: 'USA'
}

RETURN:
{
"_id": "6349354c97d2728e2d2f5feb",
"name": "Foo Fighters",
"origin": "USA",
"__v": 0
}

```

****
## **PUT METHOD**
****
****

```
PUT/api/bands/<band ID>
```
Update band. Example:
```
{
"results": [
{
"_id": "6347ec3436c75cbdfebc3d08",
"name": "AC_DC",
"origin": "Australia"
},
{
"_id": "6347ec5736c75cbdfebc3d09",
"name": "Los Zigarros",
"origin": "Spain"
}
]
}
```

*****
*****
*****
*****
# API Indexes

```js
[
  { v: 2, key: { _id: 1 }, name: '_id_' },
  { v: 2, key: { name: 1 }, name: 'name_1' },
  { v: 2, key: { origin: 1 }, name: 'origin_1' },
  { //full text search
    v: 2,
    key: { _fts: 'text', _ftsx: 1 },
    name: 'name_text_origin_text',
    weights: { name: 1, origin: 1 },
    default_language: 'english',
    language_override: 'language',
    textIndexVersion: 3
  }
]
```