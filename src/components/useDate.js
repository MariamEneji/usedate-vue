// useDate.js
import { ref, onMounted, onUnmounted, computed } from 'vue';

const useDate = (initialDate = new Date()) => {
  // Create a ref for managing the current date
  const currentDate = ref(initialDate);

  // Function to update the date
  const setDate = (newDate) => {
    currentDate.value = newDate;
  };

  // Function to get the formatted date in words and number format with time zone
  const getFormattedDate = computed(() => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZoneName: 'short',
    };
    return currentDate.value.toLocaleDateString(undefined, options);
  });

  // Set up an interval to update the date every second
  const intervalId = setInterval(() => {
    setDate(new Date());
  }, 1000);

  // Clean up the interval when the component is unmounted
  onUnmounted(() => {
    clearInterval(intervalId);
  });

  // Return the functions and properties as an object
  return {
    date: currentDate,
    setDate,
    getFormattedDate,
  };
};

export default useDate;
