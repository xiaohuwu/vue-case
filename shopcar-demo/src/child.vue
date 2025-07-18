<template>
  <div>
    <slot :user="user" :text= "text"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: { name: '张三' },
      text: '你好'
    }
  }
}
</script>
