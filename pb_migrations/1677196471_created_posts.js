migrate((db) => {
  const collection = new Collection({
    "id": "tv3xkgsnpyzx5s3",
    "created": "2023-02-23 23:54:31.695Z",
    "updated": "2023-02-23 23:54:31.695Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vggn5nw9",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("tv3xkgsnpyzx5s3");

  return dao.deleteCollection(collection);
})
