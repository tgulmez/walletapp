/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3608865230")

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "bool2443264020",
    "name": "nfc_enabled",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3608865230")

  // remove field
  collection.fields.removeById("bool2443264020")

  return app.save(collection)
})
