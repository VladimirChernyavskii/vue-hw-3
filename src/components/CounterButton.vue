<script setup>
import { ref } from 'vue'

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  step: {
    type: Number,
    default: 1,
  },
})

const emit = defineEmits(['change'])

const count = ref(0)

function increment() {
  count.value += props.step
  emit('change', count.value)
}
</script>

<template>
  <div class="counter">
    <h2>{{ label }}: {{ count }}</h2>
    <button @click="increment">Увеличить</button>
  </div>
</template>

<style scoped>
.counter {
  text-align: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

button {
  padding: 8px 16px;
  cursor: pointer;
}
</style>