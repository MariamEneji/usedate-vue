<!-- DisplayDateComponent.vue -->
<template>
    <div>
      <p>Current Date: {{ formattedDate }}</p>
      <p>Raw Date Object: {{ JSON.stringify(date) }}</p>
    </div>
  </template>
  
  <script>
  import useDate from './useDate';
  
  export default {
    setup() {
      // Use the useDate composable
      const { date, getFormattedDate } = useDate();
  
      // Computed property to get the formatted date
      const formattedDate = getFormattedDate;
      
  
      // Return the properties to be used in the template
      return {
        date,
        formattedDate,
      };
    },
  };
  </script>
  