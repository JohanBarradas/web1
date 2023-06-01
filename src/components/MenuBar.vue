<template>
  <div class="h-6" />
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect"
  >
    <el-menu-item index="1">Main Center</el-menu-item>
    <el-sub-menu index="2">
      <template #title>Projects</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="3" disabled>WIP</el-menu-item>
    <el-menu-item index="4">About</el-menu-item>
  </el-menu>
</template>

<script setup>
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var activeIndex = (0, vue_1.ref)('1');
var handleSelect = function (key, keyPath) {
    console.log(key, keyPath);
};
</script>

<script>
export default {
  name: 'MenuBar',
  props: {
    msg: String
  }
}

</script>

