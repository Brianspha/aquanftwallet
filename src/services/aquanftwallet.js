const {
  get_all_collections_opensea,
  get_collection_listing_by_address_opensea,
} = require("../_aqua/aquanftapdef.js");

export default {
  async getAllColletionsOpensea({ limit = 300, offset = 0 }) {
    try {
      let openseaCollectionResponse = await get_all_collections_opensea(
        limit,
        offset
      );
      const parsedCollection = JSON.parse(openseaCollectionResponse);
      return parsedCollection.assets;
    } catch (error) {
      console.log("error fetching opensea collection:", error);
      return [];
    }
  },

  async getCollectionByAddressOpensea({
    asset_contract_address,
    order_direction = 0,
    limit = 50,
  }) {
    try {
      let contractAssetsResponse = await get_collection_listing_by_address_opensea(
        asset_contract_address,
        order_direction,
        limit
      );

      let parsedAssets = JSON.parse(contractAssetsResponse);
      return parsedAssets.assets;
    } catch (error) {
      console.log("error fetching opensea collection by address:", error);
      return [];
    }
  },
};
