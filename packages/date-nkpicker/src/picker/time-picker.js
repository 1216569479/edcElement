/*
 * @Author: your name
 * @Date: 2021-12-23 14:18:08
 * @LastEditTime: 2021-12-23 14:25:57
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \edcElement\packages\date-ukpicker\src\picker\time-picker.js
 */
import Picker from '../picker';
import TimePanel from '../panel/time';
import TimeRangePanel from '../panel/time-range';

export default {
  mixins: [Picker],

  name: 'ElTimeNkpicker',

  props: {
    isRange: Boolean,
    arrowControl: Boolean
  },

  data() {
    return {
      type: ''
    };
  },

  watch: {
    isRange(isRange) {
      if (this.picker) {
        this.unmountPicker();
        this.type = isRange ? 'timerange' : 'time';
        this.panel = isRange ? TimeRangePanel : TimePanel;
        this.mountPicker();
      } else {
        this.type = isRange ? 'timerange' : 'time';
        this.panel = isRange ? TimeRangePanel : TimePanel;
      }
    }
  },

  created() {
    this.type = this.isRange ? 'timerange' : 'time';
    this.panel = this.isRange ? TimeRangePanel : TimePanel;
  }
};
