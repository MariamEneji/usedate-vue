
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
     
      const { date, getFormattedDate } = useDate();
  
  
      const formattedDate = getFormattedDate;
      
  
      return {
        date,
        formattedDate,
      };
    },
  };
  </script>
  