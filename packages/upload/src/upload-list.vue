<template>
  <transition-group
    tag="ul"
    :class="[
      'el-upload-list',
      'el-upload-list--' + listType,
      { 'is-disabled': disabled },
    ]"
    name="el-list"
  >
    <li
      v-for="file in files"
      :class="[
        'el-upload-list__item',
        'is-' + file.status,
        focusing ? 'focusing' : '',
      ]"
      :key="file.uid"
      tabindex="0"
      @keydown.delete="!disabled && $emit('remove', file)"
      @focus="focusing = true"
      @blur="focusing = false"
      @click="focusing = false"
    >
      <slot :file="file">
        <img
          class="el-upload-list__item-thumbnail"
          v-if="
            file.status !== 'uploading' &&
            ['picture-card', 'picture'].indexOf(listType) > -1
          "
          :src="file.url"
          alt=""
        />
        <a class="el-upload-list__item-name">
          <img
            @click="handleIconClick(file)"
            v-if="getFileIcon(file)"
            :src="getFileIcon(file)"
            style="verticalalign: top"
          />
          <i class="el-icon-document" @click="handleIconClick(file)" v-else></i>
          <span @click="handleClick(file)">{{ file.name }}</span>
        </a>
        <div class="el-upload-list__item-operate">
          <i class="el-icon-view" v-if="getViewFlag(file)" @click="handleWatchClick(file)"></i>
          <i class="el-icon-download" v-if="getDowmloadFlag(file)" @click="handleDownloadClick(file)"></i>
          <label class="el-upload-list__item-status-label">
            <i
              :class="{
                'el-icon-upload-success': true,
                'el-icon-circle-check': listType === 'text',
                'el-icon-check':
                  ['picture-card', 'picture'].indexOf(listType) > -1,
              }"
            ></i>
          </label>
          <i
            class="el-icon-close"
            v-if="!disabled"
            @click="$emit('remove', file)"
          ></i>
        </div>

        <el-progress
          v-if="file.status === 'uploading'"
          :type="listType === 'picture-card' ? 'circle' : 'line'"
          :stroke-width="listType === 'picture-card' ? 6 : 2"
          :percentage="parsePercentage(file.percentage)"
        >
        </el-progress>
        <span
          class="el-upload-list__item-actions"
          v-if="listType === 'picture-card'"
        >
   
          <span
            class="el-upload-list__item-preview"
            v-if="getViewFlag(file) && listType === 'picture-card'"
          
          >
            <i class="el-icon-zoom-in" @click="handlePreview(file)"></i>
          </span>
          <span class="el-upload-list__item-preview" v-if="getDowmloadFlag(file)">
            <i class="el-icon-zoom-in"  @click="handleDownloadClick(file)"></i>
          </span>
          <span
            v-if="!disabled"
            class="el-upload-list__item-delete"
            @click="$emit('remove', file)"
          >
            <i class="el-icon-delete"></i>
          </span>
        </span>
      </slot>
    </li>
  </transition-group>
</template>
<script>
import Locale from "element-ui/src/mixins/locale";
import ElProgress from "element-ui/packages/progress";

export default {
  name: "ElUploadList",

  mixins: [Locale],

  data() {
    return {
      focusing: false,
    };
  },
  components: { ElProgress },

  props: {
    files: {
      type: Array,
      default() {
        return [];
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    handlePreview: Function,
    handleIconPreview: Function,
    handleWatch:Function,
    handleDownload:Function,
    listType: String,
    setFileIcon: Function,
    setDowmloadFlag:Function,
    setViewFlag:Function
  },
  methods: {
    parsePercentage(val) {
      return parseInt(val, 10);
    },
    handleWatchClick(file) {
      this.handleWatch && this.handleWatch(file);
    },
    handleDownloadClick(file) {
      this.handleDownload && this.handleDownload(file);
    },
    handleClick(file) {
      this.handlePreview && this.handlePreview(file);
    },
    handleIconClick(file) {
      this.handleIconPreview && this.handleIconPreview(file);
    },
    getViewFlag(file) {
      if (this.setViewFlag) {
        return this.setViewFlag(file);
      } else {
        return true;
      }
    },
    getDowmloadFlag(file) {
      if (this.setDowmloadFlag) {
        return this.setDowmloadFlag(file);
      } else {
        return true;
      }
    },
    getFileIcon(file) {
      if (this.setFileIcon) {
        return this.setFileIcon(file);
      } else {
        return false;
      }
    },
  },
};
</script>
