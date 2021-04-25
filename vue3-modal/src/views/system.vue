<template>
  <div class="modal">
    <a-modal class="notice"
             v-model:visible="visible"
             @cancel="cancel"
             width="890px"
             title="弹窗"
             :footer="null"
             @ok="handleOk">
      我是一个系统弹窗
    </a-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { closeModal } from "../setup/controlModal/index";

export default defineComponent({
  name: "modal",
  components: {},
  setup() {
    const { visible, cancel } = closeModal("system");
    return { visible, cancel };
  }
});
</script>

<style  scoped>
</style>
