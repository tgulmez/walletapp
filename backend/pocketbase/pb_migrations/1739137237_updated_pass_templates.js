/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_980447197")

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "bool1173357973",
    "name": "huawei_wallet_active",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_980447197")

  // remove field
  collection.fields.removeById("bool1173357973")

  return app.save(collection)
})
