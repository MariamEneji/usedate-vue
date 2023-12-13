
import { ref, onMounted, onUnmounted, computed } from 'vue';

const useDate = (initialDate = new Date()) => {

  const currentDate = ref(initialDate);

  
  const setDate = (newDate) => {
    currentDate.value = newDate;
  };

 
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

  const intervalId = setInterval(() => {
    setDate(new Date());
  }, 1000);


  onUnmounted(() => {
    clearInterval(intervalId);
  });


  return {
    date: currentDate,
    setDate,
    getFormattedDate,
  };
};

export default useDate;
