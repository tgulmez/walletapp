/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_980447197")

  // add field
  collection.fields.addAt(11, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1118452524",
    "max": 0,
    "min": 0,
    "name": "logo_text",
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
  collection.fields.removeById("text1118452524")

  return app.save(collection)
})
