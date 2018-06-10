<template>
  <div id="app">
    <img src="./assets/home-icon.png" />
    <WeeklyTable :entries="entries" test="foo"/>

    <form v-on:submit.prevent="submitEntry()">
      
      <div>
        <input placeholder="Name" v-model="entry.name" type="text"/>
      </div>

      <select v-model="entry.day">
        <option value="" disabled selected>On...</option>
        <option value="monday">Monday</option>
        <option value="tuesday">Tuesday</option>
        <option value="wednesday">Wednesday</option>
        <option value="thursday">Thursday</option>
        <option value="friday">Friday</option>
      </select>

      <select v-model="entry.location">
        <option value="" disabled selected>I'm working from...</option>
        <option value="home">Home</option>
        <option value="office" >Office</option>
      </select>

      <div>
        <textarea placeholder="Notes" v-model="entry.notes"></textarea>
      </div>

      <button type="submit">Submit</button>

    </form>

  </div>
</template>

<script>
import WeeklyTable from './components/WeeklyTable.vue'

export default {
  name: 'app',
  components: {
    WeeklyTable
  },
  data: function() {
    return {
      entries: {
        monday: [

        ],
        tuesday: [

        ],
        wednesday: [

        ],
        thursday: [
       
        ],
        friday: [
        
        ]
      },
      entry: {
        name: "",
        location: "",
        notes:""
      },
      addToNextFreeCell: function(entry, day) {
        // make copy to avoid referece to current entry obj
        //let entryRecord = Object.assign({}, entry);
        var entryRecord = JSON.parse(JSON.stringify(entry));
        for (var i = 0; i < day.length; i ++) {
          if (day[i].empty) {
            console.log('i is: ' + i);
            this.$set(day, i, entryRecord);
            console.log('adding entry to ');
            console.log(day);
            return true;
          }
        }
        console.log('no free cel, create new row')
        day.push(entryRecord); // no free cell, create new row;
      },
      submitEntry: function() {

        // validate :/

        // adding to fri doesn't work at all
        // adding to thurs adds to both thurs and fri
        this.addToNextFreeCell(this.entry, this.entries[this.entry.day]);

      }
    }
  },
  created: function() {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
label {
  display: block;
}
</style>
