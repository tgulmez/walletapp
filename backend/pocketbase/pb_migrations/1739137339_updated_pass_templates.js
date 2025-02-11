/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_980447197")

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "date2581095870",
    "max": "",
    "min": "",
    "name": "pass_type_id_expiration",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_980447197")

  // remove field
  collection.fields.removeById("date2581095870")

  return app.save(collection)
})
