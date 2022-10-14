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


## API

### /api/bands

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

### API Indexes

```json
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