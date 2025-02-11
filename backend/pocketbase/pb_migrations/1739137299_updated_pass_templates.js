/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_980447197")

  // add field
  collection.fields.addAt(8, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3467869551",
    "max": 0,
    "min": 0,
    "name": "pass_type_id",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_980447197")

  // remove field
  collection.fields.removeById("text3467869551")

  return app.save(collection)
})
