/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3653375940")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1001261735",
    "max": 0,
    "min": 0,
    "name": "event",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3653375940")

  // remove field
  collection.fields.removeById("text1001261735")

  return app.save(collection)
})
