/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3608865230")

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_980447197",
    "hidden": false,
    "id": "relation2040175546",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "pass_template_id",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3608865230")

  // remove field
  collection.fields.removeById("relation2040175546")

  return app.save(collection)
})
