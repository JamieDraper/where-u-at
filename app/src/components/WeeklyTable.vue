<template>
  <div class="Rtable Rtable--5cols Rtable--collapse js-RtableAccordions">
  
    <button class="Accordion" role="tab" aria-selected="true">Monday</button>
    <div style="order:0;" class="Rtable-cell Rtable-cell--head day"><h3>Monday</h3></div>
    <div v-for="(person, index) in entries.monday" v-bind:style="{ order: index + 1 }" class="Rtable-cell">
    <EntryCell :name="person.name"/>
    </div>


    
    <button class="Accordion" role="tab" aria-selected="true">Tuesday</button>
    <div style="order:0;" class="Rtable-cell Rtable-cell--head day"><h3>Tuesday</h3></div>
    <div v-for="(person, index) in entries.tuesday" v-bind:style="{ order: index + 1  }" class="Rtable-cell">
    <EntryCell :name="person.name" />
    </div>

    
    <button class="Accordion" role="tab" aria-selected="false">Wednesday</button>
    <div style="order:0;" class="Rtable-cell Rtable-cell--head day"><h3>Wednesday</h3></div>
    <div v-for="(person, index) in entries.wednesday" v-bind:style="{ order: index + 1  }" class="Rtable-cell">
    <EntryCell :name="person.name" />
    </div>
    
    <button class="Accordion" role="tab" aria-selected="false">Thursday</button>
    <div style="order:0;" class="Rtable-cell Rtable-cell--head day"><h3>Thursday</h3></div>
    <div v-for="(person, index) in entries.thursday" v-bind:style="{ order: index + 1  }" class="Rtable-cell">
    <EntryCell :name="person.name" />   
    </div>
    
    <button class="Accordion" role="tab" aria-selected="false">Friday</button>
    <div style="order:0;" class="Rtable-cell Rtable-cell--head day"><h3>Friday</h3></div>
    <div v-for="(person, index) in entries.friday" v-bind:style="{ order: index + 1  }" class="Rtable-cell">
    <EntryCell :name="person.name" />  
    </div>

  </div>
</template>

<script>

import EntryCell from './EntryCell.vue'

export default {
  name: 'WeeklyTable',
  components: {
    EntryCell
  },
  props: {
    entries: Object
  },
  created: function() {
    
  },
  data: function(){
    return {
      styleObject: {
        'order': 0
      }
    }
  },
  watch: { 
    entries: {
      handler: function(newVal, oldVal) { 
        //console.log('WATCHER FOR ENTRIES FIRED');
        // calculate the most entries on a sengle day
        var mostEntriesPerDay = 0;
        for (var day in this.entries) {
          if ( this.entries.hasOwnProperty(day) && this.entries[day].length > mostEntriesPerDay ) {
            mostEntriesPerDay = this.entries[day].length;
          }
        }
        console.log('mostEntriesPerDay: ' + mostEntriesPerDay);
        // add empty entries until they all match in entry length
        for (var day in this.entries) {
          if ( this.entries.hasOwnProperty(day) && this.entries[day].length <  mostEntriesPerDay ) {
            // add blank entry
            var numberOfBlankEntries = mostEntriesPerDay - this.entries[day].length;
            for (var i = 0; i < numberOfBlankEntries; i++) {
              this.entries[day].push({'empty': true});
            }
          }
        }

      },
      deep: true
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 li {
  display: block;
 }

.Rtable {
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 3em 0;
  padding: 0;
}
.Rtable-cell {
  box-sizing: border-box;
  flex-grow: 1;
  width: 100%;
  padding: 0.8em 1.2em;
  overflow: hidden;
  list-style: none;
  border: solid 3px white;
  background: rgba(112, 128, 144, 0.2);
}
.Rtable-cell > h1,
.Rtable-cell > h2,
.Rtable-cell > h3,
.Rtable-cell > h4,
.Rtable-cell > h5,
.Rtable-cell > h6 {
  margin: 0;
}
/* Table column sizing
================================== */
.Rtable--2cols > .Rtable-cell {
  width: 50%;
}
.Rtable--3cols > .Rtable-cell {
  width: 33.33%;
}
.Rtable--4cols > .Rtable-cell {
  width: 25%;
}
.Rtable--5cols > .Rtable-cell {
  width: 20%;
}
.Rtable--6cols > .Rtable-cell {
  width: 16.6%;
}

@media all and (max-width: 500px) {
  .hiddenSmall {
    display: none;
  }
  .Rtable-cell--head.day {
    display: none;
  }
}
@media all and (min-width: 500px) {
  .Accordion {
    display: none;
  }
}

</style>
