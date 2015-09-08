import * as Rx from 'rx';

import * as util from 'ionic/util';
import {NativePlugin} from '../plugin';

@NativePlugin({
  name: 'Vibration',
  platforms {
    cordova: 'cordova-plugin-vibration'
  }
})
export class Vibration {
  static vibrate(pattern) {
    this.pluginWarn();
    if(!navigator.vibrate) {
      console.log('Vibrate (dev): ', pattern);
      return;
    }
    navigator.vibrate(pattern);
  }
}