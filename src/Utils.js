/* eslint-disable handle-callback-err */
import I18n from './modules/i18n';
import Toast from 'react-native-root-toast';
import ImageResizer from 'react-native-image-resizer';
import {Dimensions, Platform, Alert} from 'react-native';

export const showToast = message => {
  return Toast.show(message, {
    duration: Toast.durations.LONG,
    position: Toast.positions.CENTER,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
  });
};

export const alert = (message, title) =>
  Alert.alert(title || I18n.t('alert'), message, [
    {
      text: I18n.t('ok'),
      style: 'cancel',
    },
  ]);

export const showAlertYN = (title, message, onAgree) =>
  Alert.alert(
    title,
    message,
    [
      {
        text: I18n.t('cancel'),
        style: 'cancel',
      },
      {text: I18n.t('agree'), onPress: onAgree},
    ],
    {cancelable: false},
  );

export const validatePassword = text => {
  const format = /[ !#$%^&*()_+\-=\[\]{}':"\\|,.<>\/?]/;
  return format.test(text || ' ');
};

export function convertString(str) {
  if (!str) {
    return str;
  }
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/đ/g, 'd');
  str = str.replace(/\s/g, '');
  str = str.replace(/-/g, '');
  str = str.replace(/ + /g, ' ');
  str = str.trim();
  return str;
}

export function convertDate(date) {
  if (!date) {
    return date;
  }
  date = date.toString();
  date = date.replace(/T/g, ' ');
  date = date.replace(/Z/g, '');
  return date;
}

export function findAllLetter(source, find) {
  var result = [];
  if (source) {
    for (i = 0; i < source.length; ++i) {
      // If you want to search case insensitive use
      // if (source.substring(i, i + find.length).toLowerCase() == find) {
      if (source.substring(i, i + find.length) == find) {
        result.push(i);
      }
    }
  }
  return result;
}

export function isIphoneX() {
  const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 812 ||
      dimen.width === 812 ||
      (dimen.height === 896 || dimen.width === 896))
  );
}

// set ss -> mm:ss!
export function secondsToTime(time) {
  return ~~(time / 60) + ':' + (time % 60 < 10 ? '0' : '') + (time % 60);
}

export const resizeImage = data => {
  if (data.fileSize < 1000000) {
    return data;
  }
  const resize = 1000000 / data.fileSize;
  const newWidth = resize * data.width;
  const newHeight = resize * data.height;
  // const rotation = originalRotation == 90 ? 90 //die app when pick anh chup trong storage
  // console.log('Ty le resize: ' + resize, newWidth, newHeight)
  return ImageResizer.createResizedImage(
    data.uri,
    newWidth,
    newHeight,
    'JPEG',
    100,
  )
    .then(response => {
      // console.log('Image resize: ', response)
      return {
        ...response,
        type: 'image/jpeg',
        height: newHeight,
        width: newWidth,
        fileName: response.name,
      };
    })
    .catch(err => {
      // Oops, something went wrong. Check that the filename is correct and
      // inspect err to get more details.
      return data;
    });
};

export const getLastMonth = () => {
  const date = new Date();
  const month = date.getMonth() == 1 ? 12 : date.getMonth() - 1;
  const year = month == 12 ? date.getFullYear() - 1 : date.getFullYear();
  return new Date(year, month, 1);
};

export const toDate = dateStr => {
  const [day, month, year] = dateStr.split('/');
  return new Date(year, month - 1, day);
};

export function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function convertOjbToParams(obj) {
  return Object.keys(obj)
    .map(function(key) {
      return key + '=' + obj[key];
    })
    .join('&');
}
