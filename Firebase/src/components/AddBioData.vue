<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          required
          v-model="biodata.name"
          name="name"
        />
      </div>

      <div class="form-group">
        <label for="age">Age</label>
        <input
          class="form-control"
          id="age"
          required
          v-model="biodata.age"
          name="age"
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
         <!-- </option>
         <option value="A">A</option>
         <option value="B">B</option>
         <option value="AB">AB</option>
         <option value="O">O</option> -->

         </option>
        </select>
        <!-- <input
          class="form-control"
          id="bloodGroup"
          required
          v-model="biodata.blood"
          name="bloodGroup"
        /> -->
      </div>

      <button @click="saveBioData" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newBioData">Add</button>
    </div>
  </div>
</template>

<script>
import BioDataService from "../services/BioDataService";

export default {
  name: "add-biodata",
  data() {
    return {
      biodata: {
        name: "",
        age: "",
        bloodGroups:{
          "A":"A",
          "B":"B",
          "AB":"AB",
          "O":"O"}
      },
      submitted: false
    };
  },
  methods: {
    saveBioData() {
      var data = {
        name: this.biodata.name,
        age: this.biodata.age,
        bloodGroup: this.biodata.bloodGroup
      };

      BioDataService.create(data)
        .then(() => {
          console.log(" Added a new person successfully!");
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newBioData() {
      this.submitted = false;
      this.biodata = {
        name: "",
        age: "",
        bloodGroup: ['A','B','AB','O']
      };
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
