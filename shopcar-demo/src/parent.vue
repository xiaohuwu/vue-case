<template>
  <Child>
    <template v-slot:default="slotProps"> <!-- 或简写 #default="slotProps" -->
      {{ slotProps.text }}，{{ slotProps.user.name }}
    </template>
  </Child>
</template>

<script>
import child from './child.vue';
export default {
  components: {
    Child: child
  }
}

</script>
