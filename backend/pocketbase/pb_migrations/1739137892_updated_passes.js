/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3608865230")

  // add field
  collection.fields.addAt(5, new Field({
    "exceptDomains": null,
    "hidden": false,
    "id": "email89163564",
    "name": "user_email",
    "onlyDomains": null,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "email"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3608865230")

  // remove field
  collection.fields.removeById("email89163564")

  return app.save(collection)
})
