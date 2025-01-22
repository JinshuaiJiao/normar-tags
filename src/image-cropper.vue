<template>
    <div class="avatar-wrapper" v-if="!outerImage" @click="visible = true">
        <div />
    </div>
    <img class="avatar-wrapper" v-else :src="outerImage" alt="outerImage">
    <a-modal v-model:open="visible" title="选择图片" @ok="handleSubmit" width="720px" cancelText="取消" okText="确定"
        :maskClosable="false">
        <div class="modal-content">
            <!-- <a-upload
        v-if="!imageUrl"
        ref="upload"
        v-model:file-list="fileList"
        list-type="picture-card"
        class="avatar-uploader"
        :show-upload-list="false"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        :before-upload="beforeUpload"
        :custom-request="handleUpload"
      >
        <div class="img-wrapper">
          <div
            :style="{
              fontSize: '20px',
              marginBottom: '5px',
            }"
          />
          <span class="img-tips">选择图片</span>
        </div>
        
      </a-upload> -->
            <input v-if="!imageUrl" @change="changeFile" type="file" />
            <div v-else class="cut">
                <VueCropper @real-time="realTime" ref="cropper" :img="imageUrl" :output-size="option.size"
                    :output-type="option.outputType" :info="true" :full="option.full" :fixed="option.fixed"
                    :fixed-number="option.fixedNumber" :can-move="option.canMove" :can-move-box="option.canMoveBox"
                    :fixed-box="option.fixedBox" :original="option.original" :auto-crop="option.autoCrop"
                    :auto-crop-width="option.autoCropWidth" :auto-crop-height="option.autoCropHeight"
                    :center-box="option.centerBox" :high="option.high" mode="cover" :max-img-size="option.max" />
            </div>
            <div class="content-right">
                <div class="avatar default" v-if="!imageUrl">图片</div>
                <div v-else>
                    <div class="show-preview" :style="{
                        'width': previews?.w + 'px',
                        'height': previews?.h + 'px',
                        'overflow': 'hidden',
                    }">
                        <div :style="previews?.div">
                            <img :src="previews?.url" :style="previews?.img">
                        </div>
                    </div>
                </div>

                <div class="upload-tips">
                    <div class="upload-tip">请按照以下建议上传图片以达到最佳展示效果：</div>
                    <div class="upload-tip">1、图片大小不超过6MB</div>
                    <div class="upload-tip">2、支持jpg、png、jpeg</div>
                    <div class="upload-tip">3、图片长宽比为1：1</div>
                </div>
            </div>
        </div>
        <div class="operate-wrapper" v-if="imageUrl">
            <!-- <a-upload ref="upload" v-model:file-list="fileList" class="avatar-uploader" :show-upload-list="false"
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76" :before-upload="beforeUpload"
                :custom-request="handleUpload">
                <button>重新上传</button>
            </a-upload> -->
            <button>重新上传</button>
            <div @click="handlePlus" :style="{
                cursor: 'pointer',
                fontSize: '16px',
                marginRight: '15px'
            }">正数为变大</div>
            <div @click="handleMinus" :style="{
                cursor: 'pointer',
                fontSize: '16px',
                marginRight: '15px'
            }">负数变小</div>
            <div @click="handleTurnLeft" :style="{
                cursor: 'pointer',
                fontSize: '16px',
                marginRight: '15px'
            }">向左旋转</div>
            <div @click="handleTurnRight" :style="{
                cursor: 'pointer',
                fontSize: '16px',
                marginRight: '10px'
            }">向右旋转</div>
        </div>

        <el-button @click="getBase64">获取base64</el-button>
    </a-modal>
</template>

<script setup>
import { ref } from 'vue'
import { VueCropper } from 'vue-cropper'
import 'vue-cropper/dist/index.css'

const outerImage = ref(undefined)

const visible = ref(false)
const imageUrl = ref('');
const previews = ref(null)
const cropper = ref()
const option = ref({
    size: 1,
    full: false,
    outputType: 'png,jpg',
    canMove: false,
    fixedBox: true,
    fixed: false,
    original: false,
    canMoveBox: false,
    autoCrop: true,
    // 只有自动截图开启 宽度高度才生效
    autoCropWidth: 200,
    autoCropHeight: 200,
    centerBox: false,
    high: true,
    fixedNumber: [1, 1],
    max: 2000,
})
const realTime = (data) => {
    previews.value = data
}
const handlePlus = () => {
    cropper.value.changeScale(1)
}
const handleMinus = () => {
    cropper.value.changeScale(-1)
}
const handleTurnLeft = () => {
    cropper.value.rotateLeft()
}
const handleTurnRight = () => {
    cropper.value.rotateRight()

}
const getBase64 = () => {
    cropper.value.getCropData((data) => {
        outerImage.value = data
        console.log('[ data ] >', data)
    });
}
const handleSubmit = () => {

    cropper.value.getCropData((data) => {
        outerImage.value = data
        console.log('[ data ] >', data)
    });

    visible.value = false
}

/* 获取base64格式 */
function changeFile(e) {
    const imgFile = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(imgFile);
    reader.onload = () => {
        imageUrl.value = reader.result
        console.log(imageUrl.value);

    };

}
</script>


<style scoped lang="css">
.avatar-wrapper {
    cursor: pointer;
    width: 200px;
    height: 200px;
    line-height: 200px;
    text-align: center;
    border: 1px dashed #d9d9d9;
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.modal-content {
    display: flex;
    justify-content: space-between;

    .img-wrapper {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        background-color: #f4f4fb;
    }

    .content-right {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .avatar {
            border-radius: 50%;
            display: inline-block;
            width: 200px;
            height: 200px;
            font-size: 20px;
            text-align: center;
            line-height: 200px;
            font-weight: 400;
            background-color: #f4f4fb;
        }

        .upload-tips {
            font-size: 12px;
            width: 200px;
            line-height: 18px;
        }
    }

    :deep(.ant-upload.ant-upload-select.ant-upload-select-picture-card) {
        width: 450px !important;
        height: 400px !important;
    }
}

.cut {
    height: 400px;
    width: 450px;
    margin-bottom: 8px;
}

.show-preview {
    border-radius: 50%;
    display: inline-block;
    font-weight: 700;
    background-color: #f4f4fb;
}

.operate-wrapper {
    width: 450px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>