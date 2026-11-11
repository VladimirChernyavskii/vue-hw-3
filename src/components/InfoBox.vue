<script setup>
defineProps({})
</script>

<template>
  <div class="info-box">
    <h2>
      <slot name="header">Информация</slot>
    </h2>

    <div class="content">
      <slot />
    </div>

    <footer v-if="$slots.footer">
      <slot name="footer" />
    </footer>
  </div>
</template>

<style scoped>
.info-box {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
}

.content {
  margin: 16px 0;
}

footer {
  border-top: 1px solid #ccc;
  padding-top: 12px;
  color: #666;
}
</style>