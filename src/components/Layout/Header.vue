<template>
  <div>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">指引</el-menu-item>
        <el-menu-item index="2">组件</el-menu-item>
        <el-menu-item index="3">模式</el-menu-item>
        <el-menu-item index="4">资源</el-menu-item>
      </el-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '2',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>