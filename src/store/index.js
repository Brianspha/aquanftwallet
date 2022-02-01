import Vue from "vue";
import Vuex from "vuex";
import swal from "sweetalert2";
import createPersistedState from "vuex-persistedstate";
import { SkynetClient } from "skynet-js";

Vue.use(Vuex);
const client = new SkynetClient("https://siasky.net/");
console.log(require("../data/opensea.json").collections)
/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    isLoading: false,
    userAddress: "",
    primaryColor: "green darken-1",
    secondaryColor: "#699c79",
    showOpenseaNFTDetailsDialog:false,
    selectedCollectionOpensea:{},
    selectedCollectionRarible:{},
    selectedOpenseaNFT:{},
    selectedRaribleNFT:{},
    openseaCollections:[],
    raribleCollections:[],
    collectionOpenseaNFTs:[],
    collectionRaribleNFTs:[]
  },
  plugins: [createPersistedState()],
  modules: {},
  actions: {
    getopenseaCollectionNFTs:async function(){

    },
    loadData: async function() {
      console.log("fetching data");
      store.state.isLoading = true;
      store.state.openseaCollections=require("../data/opensea.json").collections
      store.state.isLoading = false;
    },
    getSkyData: async function() {
      var test = await this.state.skyClient.db.getJSON(
        this.state.publicKey,
        this.state.appSecret
      );
      if (test.data === null) {
        test = {
          data: [],
          leaderboard: [],
        };
      }
      return test;
    },
    saveSkyData: async function(context, data) {
      const results = await client.db.setJSON(
        this.state.privateKey,
        this.state.appSecret,
        data
      );
    },
    success(context, message) {
      swal.fire({
        position: "top-end",
        icon: "success",
        title: "Success",
        showConfirmButton: false,
        timer: 2500,
        text: message,
      });
    },
    warning(context, message) {
      swal.fire({
        icon: "info",
        title: "Info",
        text: message.warning,
        denyButtonText: `Close`,
      });
    },
    error(context, message) {
      swal.fire("Error!", message.error, "error").then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
        }
      });
    },
    successWithFooter(context, message) {
      swal.fire({
        icon: "success",
        title: "Success",
        text: message.message,
        footer: `<a href= https://testnet.bscscan.com/tx/${message.txHash}> View on Binance Explorer</a>`,
      });
    },
    errorWithFooterMetamask(context, message) {
      swal.fire({
        icon: "error",
        title: "Error!",
        text: message,
        footer: `<a href= https://metamask.io> Download Metamask</a>`,
      });
    },
  },
});

export default store;
