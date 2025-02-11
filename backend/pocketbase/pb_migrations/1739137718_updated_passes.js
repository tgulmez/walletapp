/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3608865230")

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1724566476",
    "max": 0,
    "min": 0,
    "name": "barcode_value",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3608865230")

  // remove field
  collection.fields.removeById("text1724566476")

  return app.save(collection)
})
