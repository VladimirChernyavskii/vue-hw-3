<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    default: 18,
  },
  role: {
    type: String,
    default: 'Студент',
  },
})
</script>

<template>
  <div class="card">
    <h2>Привет, {{ name }}!</h2>
    <p>Возраст: {{ age }}</p>
    <p>Роль: {{ role }}</p>
  </div>
</template>

<style scoped>
.card {
  padding: 24px;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
  font-size: 20px;
}

.card h2 {
  font-size: 24px;
  margin-top: 0;
}
</style>