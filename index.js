const facebookAds = require("./includes/stitch_facebook_ads");
const facebookAdsets = require("./includes/stitch_facebook_ad_groups");
const facebookCampaigns = require("./includes/stitch_facebook_campaigns");
const facebookAdPerformance = require("./includes/stitch_facebook_ad_performance");

module.exports = (params) => {

    params = {
        // set defaults for parameters
        databaseName: "",
        schemaName: "",
        tablePrefix: "",
        stagingTablePrefix: "",
        stagingSchema: "",
        ...params
    };

    let stitchFacebookAds, stitchFacebookAdsets, stitchFacebookCampaigns, stitchFacebookAdPerformance;

    stitchFacebookAds = declare({
        ...params.defaultConfig,
        database: params.databaseName,
        schema: params.schemaName,
        name: "ads"
    });

    stitchFacebookAdsets = declare({
        ...params.defaultConfig,
        database: params.databaseName,
        schema: params.schemaName,
        name: "adsets"
    });

    stitchFacebookCampaigns = declare({
        ...params.defaultConfig,
        database: params.databaseName,
        schema: params.schemaName,
        name: "campaigns"
    });

    stitchFacebookAdPerformance = declare({
        ...params.defaultConfig,
        database: params.databaseName,
        schema: params.schemaName,
        name: "ads_insights"
    });

    // Publish and return datasets.
    let result = {
        stitchFacebookAds: facebookAds(params),
        stitchFacebookAdsets: facebookAdsets(params),
        stitchFacebookCampaigns: facebookCampaigns(params),
        stitchFacebookAdPerformance: facebookAdPerformance(params)
    };

    return result;
}
