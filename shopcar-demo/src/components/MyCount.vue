<template>
  <div class="my-counter">
    <button type="button" class="btn btn-light" :disabled="obj.goods_count === 1" @click="updateCount(-1)">-</button>
    <input type="number" class="form-control inp" :value="obj.goods_count" @input="updateCount($event)">
    <button type="button" class="btn btn-light" @click="updateCount(1)">+</button>
  </div>
</template>

<script>
// 目标: 商品数量 - 控制
// 1. 外部传入数据对象
// 2. v-model关联对象的goods_count属性和输入框 (双向绑定)
// 3. 商品按钮 +和-, 商品数量最少1件
// 4. 侦听数量改变, 小于1, 直接强制覆盖1
export default {
  props: {
    obj: Object // 商品对象
  },
  methods: {
    updateCount(value) {
      // 如果是输入框事件
      if (value instanceof Event) {
        const newValue = parseInt(value.target.value)
        this.$emit('update:count', newValue)
      } else {
        // 如果是加减按钮
        const newValue = this.obj.goods_count + value
        if (newValue >= 1) {
          this.$emit('update:count', newValue)
        }
      }
    }
  },
  // 因为数量控制要通过对象"互相引用的关系"来影响外面对象里的数量值, 所以最好传 对象进来
  watch: {
    obj: {
      deep: true,
      handler() {
        if (this.obj.goods_count < 1) {
          this.$emit('update:count', 1)
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.my-counter {
  display: flex;
  .inp {
    width: 45px;
    text-align: center;
    margin: 0 10px;
  }
  .btn, .inp{
    transform: scale(0.9);
  }
}
</style>