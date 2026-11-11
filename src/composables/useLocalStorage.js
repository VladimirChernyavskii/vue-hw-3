import { ref, watch } from 'vue'
 
export function useLocalStorage(key, defaultValue) {
  const data = ref(defaultValue)
 
  try {
    const saved = localStorage.getItem(key)
    if (saved !== null) {
      data.value = JSON.parse(saved)
    }
  } catch (error) {
    console.warn('Не удалось прочитать данные из localStorage', error)
  }
 
  watch(
    data,
    (value) => {
      localStorage.setItem(key, JSON.stringify(value))
    },
    { deep: true }
  )
 
  return data
}
