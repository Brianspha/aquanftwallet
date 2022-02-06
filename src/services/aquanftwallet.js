const {
  get,
  get_all_collections,
  get_collection_listing_by_address,
} = require("../_aqua/aquanftapdef");

function get(url) {
  return new Promise(function(resolve, reject) {

  });
}
function get_all_collections(limit,offset,order) {
  return new Promise(function(resolve, reject) {
      
  });
}
function get_collection_listing_by_address(asset_contract_address,order_direction,limit) {
    return new Promise(function(resolve, reject) {
        
    });
  }


  module.exports={
    get,
    get_all_collections,
    get_collection_listing_by_address

  }