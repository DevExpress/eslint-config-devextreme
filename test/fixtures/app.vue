<template>
  <div>
    <span v-for="item in items">{{ item }}</span>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return { items: [] }
  },
};
</script>
