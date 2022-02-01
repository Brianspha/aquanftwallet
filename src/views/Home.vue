<template>
  <v-card>
    <v-tabs :color="$store.state.primaryColor" right>
      <v-tab>Opensea Collection</v-tab>
      <v-tab>Rarible Collection</v-tab>
      <v-tab>My Collection</v-tab>

      <v-tab-item v-for="n in 3" :key="n">
        <v-container fluid>
          <v-row>
            <v-col
              v-for="(collection, i) in $store.state.openseaCollections"
              :key="i"
              cols="12"
              md="4"
            >
              <v-card
                class="mx-auto"
                max-width="400"
                @click="
                  $store.state.selectedCollectionOpensea = collection;
                  $router.push('/opeanseaCollectionview');
                "
              >
                <v-img
                  class="white--text align-end"
                  height="200px"
                  :src="
                    collection.image_url == null || collection.image_url == ''
                      ? noImageUrl
                      : collection.image_url
                  "
                  contain
                >
                </v-img>

                <v-card-subtitle class="text--primary">
                  {{ collection.name }}
                </v-card-subtitle>

                <v-card-text class="text--secondary">
                  <div>{{ collection.description }}</div>

                  <div>Whitsunday Island, Whitsunday Islands</div>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn text> Share </v-btn>

                  <v-btn
                    :color="$store.state.primaryColor"
                    text
                    @click="
                      $store.state.selectedCollectionOpensea = collection;
                      $router.push('/opeanseaCollectionview');
                    "
                  >
                    View
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      noImageUrl: "./images/noimage.jpeg",
    };
  },
  components: {},
};
</script>
