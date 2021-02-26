const facebook = require("../");

const models = facebook({
    //
    // Define the database and schema of your facebook data
    facebookDatabase: "raw",
    facebookSchema: "facebook_ads",
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