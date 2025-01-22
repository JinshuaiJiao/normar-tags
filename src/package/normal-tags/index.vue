<template>
  <div class="custom-tag">
    <div :class="['label', type]" :style="{ minWidth: minWidth + 'px' }">
      {{ label }}
      <el-tooltip v-if="content" :content="content" :effect="effect" :placement="placement">
        <svg-icon :class="type" icon="material-symbols:error-outline-rounded" />
      </el-tooltip>
    </div>
  </div>
</template>
<script>
import SvgIcon from './icon.vue';
export default {
  components: { SvgIcon },
  props: {
    label: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'info',
    },
    content: {
      type: String,
      default: '',
    },
    minWidth: {
      type: Number,
      default: 56
    },
    placement: {
      type: String,
      default: 'top',
    },
    effect: {
      type: String,
      default: 'light',
    }
  }
}
</script>

<style scoped lang='css'>
.custom-tag {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .label {
    position: relative;
    font-size: 12px;
    color: #fff;
    width: 56px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
  }

  .info {
    background-color: #8C8C8C;
  }

  .success {
    background-color: #14C539;
  }

  .warning {
    background-color: #3194FA;
  }

  .danger {
    background-color: #FF4948;
  }

  .primary {
    background-color: #3194FA;
  }

  .el-tooltip__trigger {
    position: absolute;
    right: -20px;
    display: flex;
    align-items: center;
    background: none;
  }

  .svg-icon {
    cursor: pointer;
    width: 16px;
    height: 16px;

    &.info {
      color: #8C8C8C;
    }

    &.success {
      color: #14C539;
    }

    &.warning {
      color: #3194FA;
    }

    &.danger {
      color: #FF4948;
    }

    &.primary {
      color: #3194FA;
    }

  }
}
</style>
