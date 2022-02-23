<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { Fluence } from "@fluencelabs/fluence";
import { krasnodar } from "@fluencelabs/fluence-network-environment";
export default {
  name: "App",

  data: () => ({
    //
  }),
  mounted() {
    this.$store.dispatch("loadData");

    this.main();
  },
  methods: {
    main: async function() {
      await Fluence.start({ connectTo: krasnodar[0] });
      console.log(
        "Created a Fluence client with peer id %s and relay id %s",
        Fluence.getStatus().peerId,
        Fluence.getStatus().relayPeerId
      );

      // your code

      await Fluence.stop();
    },
  },
};
</script>
