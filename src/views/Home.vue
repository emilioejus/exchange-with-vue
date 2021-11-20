<template>
  <div>
    <px-assets-table :assets="assets" />
  </div>
</template>

<script>
import PxAssetsTable from "@/components/PxAssetsTable";
import api from "@/api";

export default {
  name: "Home",
  components: { PxAssetsTable },
  data() {
    return {
      assets: [],
    };
  },
  created() {
    api.getAssets().then((assets) => (this.assets = assets));
    // setInterval(()=> {
    //   console.log(this.assets)
    //    api.getAssets().then((assets) => (this.assets = assets))
    // }, 3000)
  },
};
</script>
