/*
 * @Author: your name
 * @Date: 2021-12-23 14:17:00
 * @LastEditTime: 2021-12-24 15:12:31
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \edcElement\packages\time-nkpicker\index.js
 */
import TimeNkpicker from '../date-nkpicker/src/picker/time-picker';

/* istanbul ignore next */
TimeNkpicker.install = function(Vue) {
  Vue.component(TimePicker.name, TimePicker);
};

export default TimeNkpicker;
