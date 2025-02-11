/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3653375940")

  // add field
  collection.fields.addAt(3, new Field({
    "exceptDomains": null,
    "hidden": false,
    "id": "url996566875",
    "name": "target_url",
    "onlyDomains": null,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "url"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3653375940")

  // remove field
  collection.fields.removeById("url996566875")

  return app.save(collection)
})
