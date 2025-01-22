<template>
  <div id="app">
    <normal-tags label="我的标签" placement="bottom" content="666" type="success" />
    <jins-button />

    <ajj style="margin-top: 30px;" />

    <image-cropper/>
  </div>
</template>
<script setup>
import Ajj from './ajj.vue'
import ImageCropper from './image-cropper.vue';
</script>

<style>
#app {
  margin-top: 60px;
}
</style>