//@flow
'use strict';

import { NativeModules, PermissionsAndroid, Platform } from 'react-native'

async function send(options: Object, callback: () => void) {
  NativeModules.SendSMS.send(options, callback);
}

const SendSMS = {
  send
}

module.exports = SendSMS;
