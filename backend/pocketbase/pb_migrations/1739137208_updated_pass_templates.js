/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_980447197")

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "bool1013226678",
    "name": "google_pay_active",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_980447197")

  // remove field
  collection.fields.removeById("bool1013226678")

  return app.save(collection)
})
