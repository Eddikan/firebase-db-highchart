<template>
  <div v-if="currentBioData" class="edit-form">
    <h4>BioData boi</h4>
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="currentBioData.name"
        />
      </div>

      <div class="form-group">
        <label for="age">Age</label>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="currentBioData.age"
        />
      </div>
    
 <div class="form-group">
        <label for="bloodGroup">Blood Group</label>
        <select 
         
          v-model="biodata.bloodGroup"        
         >
         <option v-for="(bloodGroup, key) in biodata.bloodGroups"
          :value="key"
          :key="key"
         >
         {{bloodGroup}}

         </option>
        </select>

      </div>

    
    </form>

  

    <button class="badge badge-danger mr-2" @click="deleteBioData">
      Delete this b
    </button>

    <button type="submit" class="badge badge-success" @click="updateBioData">
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <!-- <p>Please click a Bio-Data...</p>
  </div> -->
</template>

<script>
import BioDataService from "../services/BioDataService";

export default {
  name: "biodata",
  props: ["biodata"],
  data() {
    return {
      currentBioData: null,
      message: "",
    };
  },
  watch: {
    biodata: function(biodata) {
      this.currentBioData = { ...biodata };
      this.message = "";
    },
  },
  methods: {

    updateBioData() {
      const data = {
        name: this.currentBioData.name,
        age: this.currentBioData.age,
        bloodGroup: this.currentBioData.bloodGroup,
      };

      BioDataService.update(this.currentBioData.key, data)
        .then(() => {
          this.message = "The person's Bio-data was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    deleteBioData() {
      BioDataService.delete(this.currentBioData.key)
        .then(() => {
          this.$emit("refreshList");
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.currentBioData = { ...this.biodata }
  },
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
