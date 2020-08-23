<template>
  <div id="inputWrapper">
    <input
      :type="type"
      :placeholder="placeholder"
      v-model="inputVal"
      @change="checkValid"
      :class="{
      success:isValid,
      error:!isValid
      }"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputVal: "",
      isValid: true,
    };
  },
  props: ["type", "placeholder", "rule", "err_message"],
  watch: {
    inputVal(newVal) {
      if (this.rule.test(newVal)) {
        this.isValid = true;
        console.log("合法");
      } else {
        this.isValid = false;
        console.log(this.err_message);
      }
      this.$emit("valChange", newVal);
    },
  },
  methods: {
    checkValid() {
      if (!this.isValid) {
        this.$toast.fail(this.err_message);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.inputWrapper {
  input {
    width: 100%;
    border: none;
    outline: none;
    border-bottom: 1px solid #888;
    font-size: 18/360 * 100vw;
    line-height: 50/360 * 100vw;
  }
  .error {
    border-color: red;
  }
  .success{
    border-color:green;
  }
}
</style>