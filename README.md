# Facebook-ads

BETA package for transforming Facebook datasets managed by Stitch.


## Configure the package

Create a new JS file in your `definitions/` folder and create the Facebook-ads tables as in the following example.

By default, the package will look for source data in the `facebook_ads` schema in the `raw` database. Please set the source database and schema as required.

```js
const facebook = require("facebook-ads");

facebook({
    //
    // Define the database and schema of your facebook data
    databaseName: "raw",
    schemaName: "facebook_ads",
    // Optional prefix metadata if applicable
    stagingTablePrefix: "stg_",
    // Define the destination schema and table/view
    defaultConfig: {  
        database: "database_name",
        schema: "schema_name",
        tags: ["facebook"],
        type: "view"
    },
});

```

## Supported warehouses:
 - BigQuery [Tested]
 - Snowflake [Untested]
 - Redshift [Untested]
