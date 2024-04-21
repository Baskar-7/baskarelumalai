import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';
import $ from 'jquery';

export default helper(function conditions(params /*, named*/) {
  var operation = params[0];

  if (operation === '==') {
    return params[1] == params[2];
  }else if (operation === 'concat') {
    return htmlSafe(String(params[1]) + String(params[2]));
  }


});
