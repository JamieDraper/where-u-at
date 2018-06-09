<template>
  <div id="app">
    <WeeklyTable :entries="entries"/>

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
          {
            'name': 'monAlex',
            'location': 'home',
            'notes': 'Foo baa'
          },
          {
            'name': 'monJoe',
            'location': 'office',
            'notes': 'Foo baa'
          },
          {
            'name': 'monAnna',
            'location': 'home',
            'notes': 'Foo baa'
          },
          {
            'name': 'monJamie',
            'location': 'office',
            'notes': 'Foo baa'
          },
          {
            'name': 'monSarah',
            'location': 'mixed',
            'notes': 'Foo baa'
          }
        ],
        tuesday: [
          {
            'name': 'tueAlex',
            'location': 'home',
            'notes': 'Foo baa'
          },
          {
            'name': 'tueJoe',
            'location': 'office',
            'notes': 'Foo baa'
          },
          {
            'name': 'tueAnna',
            'location': 'home',
            'notes': 'Foo baa'
          },
          {
            'name': 'tueJamie',
            'location': 'office',
            'notes': 'Foo baa'
          },
          {
            'name': 'tueSarah',
            'location': 'mixed',
            'notes': 'Foo baa'
          }
        ],
        wednesday: [
          {
            'name': 'wedAlex',
            'location': 'home',
            'notes': 'Foo baa'
          },
          {
            'name': 'wedJoe',
            'location': 'office',
            'notes': 'Foo baa'
          },
          {
            'name': 'wedAnna',
            'location': 'home',
            'notes': 'Foo baa'
          },
          {
            'name': 'wedJamie',
            'location': 'office',
            'notes': 'Foo baa'
          },
          {
            'name': 'wedSarah',
            'location': 'mixed',
            'notes': 'Foo baa'
          }
        ],
        thursday: [
          {
            'name': 'thurAlex',
            'location': 'home',
            'notes': 'Foo baa'
          },
          {
            'name': 'thurJoe',
            'location': 'office',
            'notes': 'Foo baa'
          },
          {
            'name': 'thurAnna',
            'location': 'home',
            'notes': 'Foo baa'
          },
          {
            'name': 'thurJamie',
            'location': 'office',
            'notes': 'Foo baa'
          },
          {
            'name': 'thurSarah',
            'location': 'mixed',
            'notes': 'Foo baa'
          }
        ],
        friday: [
          {
            'name': 'friAlex',
            'location': 'home',
            'notes': 'Foo baa'
          },
          {
            'name': 'friJoe',
            'location': 'office',
            'notes': 'Foo baa'
          },
          {
            'name': 'friAnna',
            'location': 'home',
            'notes': 'Foo baa'
          },
          {
            'name': 'friJamie',
            'location': 'office',
            'notes': 'Foo baa'
          },
          {
            'name': 'friSarah',
            'location': 'mixed',
            'notes': 'Foo baa'
          }
        ]
      },
      entry: {
        name: "",
        location: "",
        notes:""
      },
      submitEntry: function() {
        console.log('inside submitEntry');
        console.log(this.entry);

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
