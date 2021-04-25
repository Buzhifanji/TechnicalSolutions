<template>
  <div class="home">
    <div @click="openNotice">消息-弹窗</div>
    <div @click="openSystem">系统-弹窗</div>
    <Notice />
    <System />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { openModal } from "@/setup/controlModal/index";
import Notice from "./notice.vue";
import System from "./system.vue";

// 控制消息弹窗
function controlNotice() {
  const { openAction } = openModal("notice");
  return { openNotice: openAction };
}

// 控制系统弹窗
function controlSystem() {
  const { openAction } = openModal("system");
  return { openSystem: openAction };
}

export default defineComponent({
  name: "home",
  components: {
    Notice,
    System
  },
  setup() {
    const { openNotice } = controlNotice();
    const { openSystem } = controlSystem();

    return { openNotice, openSystem };
  }
});
</script>

<style  scoped>
.home > div {
  margin: 20px 0;
  font-size: 16px;
  cursor: pointer;
}
</style>
