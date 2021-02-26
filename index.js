const facebookAds = require("./includes/facebook_ads");
const facebookAdsets = require("./includes/facebook_ad_groups");
const facebookCampaigns = require("./includes/facebook_campaigns");
const facebookAdPerformance = require("./includes/facebook_ad_performance");

module.exports = (params) => {

    params = {
        // set defaults for parameters
        facebookDatabase: "raw",
        facebookSchema: "facebook_ads",
        tablePrefix: "",
        stagingTablePrefix: "",
        stagingSchema: "",
        ...params
    };

    let ads, adsets, campaigns, adPerformance;

    ads = declare({
        ...params.defaultConfig,
        database: params.facebookDatabase,
        schema: params.facebookSchema,
        name: "ads"
    });

    adsets = declare({
        ...params.defaultConfig,
        database: params.facebookDatabase,
        schema: params.facebookSchema,
        name: "adsets"
    });

    campaigns = declare({
        ...params.defaultConfig,
        database: params.facebookDatabase,
        schema: params.facebookSchema,
        name: "campaigns"
    });

    adPerformance = declare({
        ...params.defaultConfig,
        database: params.facebookDatabase,
        schema: params.facebookSchema,
        name: "ads_insights"
    });

    // Publish and return datasets.
    let result = {
        ads: facebookAds(params),
        adsets: facebookAdsets(params),
        campaigns: facebookCampaigns(params),
        adPerformance: facebookAdPerformance(params)
    };

    return result;
}
