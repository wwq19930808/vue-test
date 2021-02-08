<template>
  <span class="msg">{{ msg }}</span>
</template>

<script>
export default {
  name: "app",
  data() {
    let a= 'c';
    return {
      msg: a,
    };
  },
};
</script>

<style>
.msg {
  color: #f23c35;
}
</style>