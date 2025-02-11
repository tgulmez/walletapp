/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_980447197")

  // add field
  collection.fields.addAt(13, new Field({
    "hidden": false,
    "id": "json2128995208",
    "maxSize": 0,
    "name": "fields",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_980447197")

  // remove field
  collection.fields.removeById("json2128995208")

  return app.save(collection)
})
