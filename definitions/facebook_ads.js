const facebook = require("../");

const facebookModels = facebook({
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
        type: "table"
    },
});
