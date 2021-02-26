# Facebook-ads

BETA package for transforming Facebook datasets managed by Segment, Stitch or Fivetran.


## Configure the package

Create a new JS file in your `definitions/` folder and create the Facebook-ads tables as in the following example.

By default, the package will look for source data in the `facebook_ads` schema in the `raw` database. Please set the source database and schema as required.

```js
const facebook = require("facebook-ads");

facebook({
    //
    // Define the database and schema of your facebook data
    facebookDatabase: "raw",
    facebookSchema: "facebook_ads",
    // Optional prefix metadata if applicable
    stagingTablePrefix: "stg_",
    // Only define one of the below sources of how you are loading the data
    usingFivetran: false,
    usingStitch: true,
    usingSegment: true,
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
[TBD]
 - BigQuery
 - Snowflake
 - Redshift
