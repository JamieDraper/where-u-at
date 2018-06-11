<template>
  <div id="app">
    
    <img class="logo" src="/images/logo.png" />
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

      <button class="add-entry-btn" v-on:click="show">+</button>

    </form>
    <modal name="hello-world">
      hello, world!
    </modal>
  </div>

</template>

<script>
import WeeklyTable from './components/WeeklyTable.vue'

export default {
  name: 'app',
  components: {
    WeeklyTable
  },
  methods: {
    show () {
      this.$modal.show('hello-world');
    },
    hide () {
      this.$modal.hide('hello-world');
    }
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
        var entryRecord = JSON.parse(JSON.stringify(entry));
        for (var i = 0; i < day.length; i ++) {
          if (day[i].empty) {
            this.$set(day, i, entryRecord);
            return true;
          }
        }
        day.push(entryRecord); // no free cell, create new row;
      },
      isDuplicateEntry: function(entry) {
        var entriesForDay = this.entries[this.entry.day];
        for (var i = 0; i < entriesForDay.length; i ++) {
          if ( entriesForDay[i].name.toLowerCase() === entry.name.toLowerCase() ) { return true;}
        }
        return false;
      },
      submitEntry: function() {
        // validate :/
        // if not duplicate
        if (!this.isDuplicateEntry(this.entry) ) {
          this.addToNextFreeCell(this.entry, this.entries[this.entry.day]);
        } else {
          console.log('duplicate ya ding dong');
          // editExistingEntry()
        }
        // else update pre-existingentry
      }
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Hind+Madurai:300,500,600,700%7CSource+Serif+Pro:400,600,700');
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0 8px; 
  min-height: 100vh;
  position: relative;
}
.logo {
  border-bottom: 3px solid #EB5F52;
  padding-bottom: 15px;
  margin-bottom: 25px;
  max-width: 200px;
  margin-top: 60px;
}
label {
  display: block;
}
.add-entry-btn {
  font-family: "Hind Madurai", sans-serif;
  color: #666;
  font-size: 111px;
  padding: 0;
  background: #EB5F52;
  color: white;
  height: 73.8px;
  line-height: 0.44;
  padding: 19px 5.71px;
  display: block;
  border-radius: 50%;
  font-weight: 300;
  position: fixed;
  right: 35px;
  bottom: 35px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  cursor: pointer;
}
button:focus {
  outline: none;
}
</style>
