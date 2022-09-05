/*
 * @Author: your name
 * @Date: 2021-12-23 14:18:07
 * @LastEditTime: 2021-12-24 14:43:19
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \edcElement\packages\date-ukpicker\index.js
 */
import DateNkpicker from './src/picker/date-picker';

/* istanbul ignore next */
DateNkpicker.install = function install(Vue) {
  Vue.component(DateNkpicker.name, DateNkpicker);
};

export default DateNkpicker;
