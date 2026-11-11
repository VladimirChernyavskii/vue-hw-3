<script setup>
defineProps({
  todo: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['toggle', 'remove'])
</script>

<template>
  <div class="todo-item">
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @change="emit('toggle', todo.id)"
      />

      <span :class="{ completed: todo.done }">
        {{ todo.title }}
      </span>
    </label>

    <button @click="emit('remove', todo.id)">
      Удалить
    </button>
  </div>
</template>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

label {
  display: flex;
  align-items: center;
  gap: 10px;
}

.completed {
  text-decoration: line-through;
  color: #888;
}

button {
  cursor: pointer;
}
</style>