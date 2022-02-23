<template>
  <v-container fluid style="padding-bottom: 5%; padding-top: 1%">
    <v-row justify="center" align="center">
      <v-card width="100%" flat>
        <v-row
          justify="center"
          align="center"
          style="padding-bottom: 5%; padding-top: 5%"
        >
          <v-app-bar absolute :color="$store.state.primaryColor" dark>
            <v-toolbar-title
              >{{
                $store.state.selectedCollectionOpensea.name
              }}
              collection</v-toolbar-title
            >
          </v-app-bar>
        </v-row>
        <v-card-text>
          <v-container fluid>
            <v-row>
              <v-col
                v-for="(asset, i) in collectionNFTs"
                :key="i"
                cols="12"
                md="4"
              >
                <v-card class="mx-auto" max-width="400">
                  <v-img
                    class="white--text align-end"
                    height="200px"
                    :src="
                      asset.image_url === null || asset.image_url === ''
                        ? noImageUrl
                        : asset.image_url
                    "
                    contain
                  >
                  </v-img>

                  <v-card-subtitle class="text--primary">
                    #{{ asset.token_id }}
                  </v-card-subtitle>

                  <v-card-text class="text--secondary">
                    <div>
                      Top bid:{{ asset.top_bid === null ? 0 : asset.top_bid }}
                      Eth
                    </div>
                    <div>
                      {{
                        asset.name === null ? "Token has no name" : asset.name
                      }}
                    </div>
                    <div>
                      Created by
                      <a :href="asset.createdByURL">{{ asset.id }}</a>
                    </div>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn v-if="asset.top_bid === null" text>
                      Make Offer
                    </v-btn>

                    <v-btn v-if="asset.top_bid !== null" text>
                      Purchase
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      collectionNFTs: [],
      noImageUrl: "./images/noimage.jpeg",
    };
  },
  beforeMount() {
    this.getCollectionNFTs().then((collection) => {
      this.collectionNFTs = collection.map((asset) => {
        console.log("asset: ", asset);
        asset.createdByURL = `https://testnets.opensea.io/${asset.owner.address}`;
        return asset;
      });
      console.log("collection: ", this.collectionNFTs);
    });
  },
  methods: {
    getCollectionNFTs: async function() {
      return new Promise((resolve) => {
        console.log(
          "this.$store.state.selectedCollectionOpensea.primary_asset_contracts: ",
          this.$store.state.selectedCollectionOpensea.primary_asset_contracts[0]
            .address
        );
        const getCollectionByAddressOpensea = require("../services/aquanftwallet")
          .default.getCollectionByAddressOpensea;
        getCollectionByAddressOpensea(
          this.$store.state.selectedCollectionOpensea.primary_asset_contracts[0]
            .address,
          "desc",
          50
        )
          .then((collection) => {
            console.log("collection found: ", collection);

            resolve(
              collection.data.assets.length > 0 ? collection.data.assets : []
            );
          })
          .catch((error) => {
            resolve([]);
          });
      });
    },
  },
};
</script>

<style></style>
