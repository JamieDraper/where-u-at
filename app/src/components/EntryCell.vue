<template>
  <div v-bind:class="[location === 'home' ? 'entry entry-home' : 'entry entry-office']" v-if="this.name">
  
    <label class="entry-name">{{ this.name }}</label>

    <img class="entry-icon" v-bind:src="cardIconUrl" />
  
    <button v-if="this.notes" class="notes-btn"></button>
  
  </div>
</template>

<script>

export default {
  name: 'EntryCell',
  props: {
    name: String,
    location: String,
    notes: String,
  },
  computed: {

  },
  data: function(){
    return {
      cardIconUrl: this.location === 'home' ? 'images/home-icon.png' : 'images/office-icon.png',
      officeIconUrl: String
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.entry {
  border-radius: 10px;
  min-height: 95px;
  position: relative;
  
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.22);
  transition: all 0.34s cubic-bezier(.25,.8,.25,1);
  cursor: pointer;
}

.entry:hover {
  box-shadow: 0 4px 28px rgba(0,0,0,0.15), 0 5px 10px rgba(0,0,0,0.16);
}

.entry-home {
  background: #949494;
}
.entry-office {
  background: #EB5F52;
}
.entry-icon {
  position: absolute;
  max-width: 90px;
  right: 0;
  bottom: 0;
}
.entry-home .entry-icon {
  right: -7px;
  bottom: 2px;
}
.entry-office .entry-icon {
  right: -6px;
  bottom: 4px;
}
.entry-name {
  font-family: 'Hind Madurai', sans-serif;
  font-weight: 600;
  color: white;
  left: 12px;
  position: absolute;
  top: 10px;
  font-size: 30px;
  cursor: pointer;
}
.notes-btn {
  background: url('/images/note.png');
  height: 30px;
  width: 30px;
  background-size: contain;
  border: 0;
  background-repeat: no-repeat;
  padding: 0;
  position: absolute;
  bottom: 11px;
  left: 9px;
  cursor: pointer;
}

.entry:hover .notes-btn {
  animation: shake 1.12s cubic-bezier(.36,.07,.19,.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%, 90% {
    transform: translate3d(-0.5px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(1px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-2px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(2px, 0, 0);
  }
}

</style>
