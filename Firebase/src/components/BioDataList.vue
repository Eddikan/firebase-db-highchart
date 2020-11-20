<template>
  <div class="list row">
    <div class="col-md-6">
      <h4>BioData List</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(biodata, index) in biodatas"
          :key="index"
          @click="setActiveBioData(biodata, index)"
        >
          {{ biodata.name }}
        </li>
      </ul>

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllBioDatas">
        Remove All
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentBioData">
        <!-- <biodatas-list
          :biodata="currentBioData"
          @refreshList="refreshList"
        /> -->
      </div>
      <div v-else>
        <br />
        <!-- <p>Please click a Bio-Data...</p> -->
      </div>
    </div>
  </div>
</template>

<script>
import BioDataService from "../services/BioDataService";
import BioDataDetails from "./BioData";

export default {
  name: "biodatas-list",
  components: { BioDataDetails },
  data() {
    return {
      biodatas: [],
      currentBioData: null,
      currentIndex: -1
    };
  },
  methods: {
    onDataChange(items) {
      let _biodatas = [];

      items.forEach((item) => {
        let key = item.key;
        let data = item.val();
        _biodatas.push({
          key: key,
          name: data.name,
          age: data.age,
          bloodGroup: data.bloodGroup,
        });
      });

      this.biodatas = _biodatas;
    },

    refreshList() {
      this.currentBioData = null;
      this.currentIndex = -1;
    },

    setActiveBioData(biodata, index) {
      this.currentBioData = biodata;
      this.currentIndex = index;
    },

    removeAllBioDatas() {
      BioDataService.deleteAll()
        .then(() => {
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    BioDataService.getAll().on("value", this.onDataChange);
  },
  beforeDestroy() {
    BioDataService.getAll().off("value", this.onDataChange);
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
