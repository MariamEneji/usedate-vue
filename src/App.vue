<!-- App.vue -->
<template>
  <div>
    <h1>Date App</h1>
    <DisplayDateComponent />
  </div>
</template>

<script>
import DisplayDateComponent from './components/DisplayDateComponent.vue';

export default {
  components: {
    DisplayDateComponent,
  },
};
</script>
