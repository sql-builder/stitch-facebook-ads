const crossDB = require("./crossDB");
const sql = require("@dataform/sql")();

const tableName = `ads_insights`

module.exports = (params) => {

    return publish(params.stagingTablePrefix + "facebook_ad_performance", {
        ...params.defaultConfig
    }).query(ctx =>`
with source as ( 
${crossDB.filterStitch(ctx, params, tableName, `ad_id`)}
)    
SELECT
    cast(ad_id as string) as ad_id,
    date_start as ad_serve_ts,
    ${crossDB.safeDivide(`spend`, `clicks`)} as ad_avg_cost,
    frequency as ad_total_frequency,
    clicks as ad_total_clicks,
    ${crossDB.castInt(null, global.dataform.projectConfig.warehouse)} as ad_total_link_clicks,
    impressions as ad_total_impressions,
    reach as ad_total_reach,
    unique_clicks as ad_total_unique_clicks,
    ${crossDB.castInt(null, global.dataform.projectConfig.warehouse)} as ad_total_unique_impressions,
    ${crossDB.castInt(null, global.dataform.projectConfig.warehouse)} as ad_total_inline_post_engagements,
    spend as ad_total_cost,
    social_spend as ad_total_social_cost,
    cast(null as timestamp) as ad_avg_time_on_site,
    ${crossDB.castFloat(null, global.dataform.projectConfig.warehouse)} as ad_bounce_rate,
    ${crossDB.castInt(null, global.dataform.projectConfig.warehouse)} as ad_total_assisted_conversions,
    ${crossDB.castFloat(null, global.dataform.projectConfig.warehouse)} as ad_total_conversion_value,
    'Facebook' as ad_network,
    _sdc_batched_at as row_loaded_on,
    current_timestamp() as updated_on,
    'STITCH' as source
FROM source
`)
}
