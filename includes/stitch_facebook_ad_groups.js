const crossDB = require("./crossDB");
const sql = require("@dataform/sql")();

const tableName = `adsets`

module.exports = (params) => {

    return publish(params.stagingTablePrefix + "facebook_ad_groups", {
        ...params.defaultConfig
    }).query(ctx => `
with source as (
${crossDB.filterStitch(ctx, params, tableName, `id`)}
)
SELECT
    cast(id as string) as ad_group_id,
    cast(campaign_id as string) as ad_campaign_id,
    cast(account_id as string) as as_account_id,
    name as ad_group_name,
    targeting as ad_group_targeting,
    effective_status as ad_group_status,
    created_time as ad_group_create_ts,
    date(start_time) as ad_group_start_date,
    cast(null as date) as ad_group_end_date,
    daily_budget as ad_group_budget,
    'Facebook' as ad_network,
    _sdc_batched_at as row_loaded_on,
    current_timestamp() as updated_on,
    'Stitch' as source_name
FROM source
`)
}
