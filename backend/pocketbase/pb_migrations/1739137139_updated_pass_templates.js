/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_980447197")

  // add field
  collection.fields.addAt(4, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2363381545",
    "max": 0,
    "min": 0,
    "name": "type",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3955794451",
    "max": 0,
    "min": 0,
    "name": "transit_type",
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
  collection.fields.removeById("text2363381545")

  // remove field
  collection.fields.removeById("text3955794451")

  return app.save(collection)
})
