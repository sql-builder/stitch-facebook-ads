const facebookAds = require("./includes/facebook_ads");
const facebookAdsets = require("./includes/facebook_ad_groups");
const facebookCampaigns = require("./includes/facebook_campaigns");
const facebookAdPerformance = require("./includes/facebook_ad_performance");

module.exports = (params) => {

    params = {
        // set defaults for parameters
        facebookDatabase: "",
        facebookSchema: "",
        tablePrefix: "",
        stagingTablePrefix: "",
        stagingSchema: "",
        ...params
    };

    let facebookAds, facebookAdsets, facebookCampaigns, facebookAdPerformance;

    facebookAds = declare({
        ...params.defaultConfig,
        database: params.facebookDatabase,
        schema: params.facebookSchema,
        name: "ads"
    });

    facebookAdsets = declare({
        ...params.defaultConfig,
        database: params.facebookDatabase,
        schema: params.facebookSchema,
        name: "adsets"
    });

    facebookCampaigns = declare({
        ...params.defaultConfig,
        database: params.facebookDatabase,
        schema: params.facebookSchema,
        name: "campaigns"
    });

    facebookAdPerformance = declare({
        ...params.defaultConfig,
        database: params.facebookDatabase,
        schema: params.facebookSchema,
        name: "ads_insights"
    });

    // Publish and return datasets.
    let result = {
        facebookAds: facebookAds(params),
        facebookAdsets: facebookAdsets(params),
        facebookCampaigns: facebookCampaigns(params),
        facebookAdPerformance: facebookAdPerformance(params)
    };

    return result;
}
