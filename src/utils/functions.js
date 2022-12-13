/**
 * Misc. functions
 */
// language translation

export const setLocalizeContent = (obj, store) => {
  try {
    return obj.en;
    // return obj[store.get("language")];
  } catch (error) {
    console.log(error);
    return {en: '', az: '', ru: ''};
  }
};

// export const Check_Authentication = async (
//   response,
//   navigation,
//   dispatch,
//   isPatch = false,
// ) => {
//   if (isPatch) {
//     if (response?.response_code === 401) {
//       dispatch(
//         ModalHandler({
//           show: true,
//           type: 'Error',
//           message: I18n.t('logged_out_alert'),
//         }),
//       );
//       dispatch({type: 'USER_TYPE', payload: null});
//       navigation.dispatch(
//         CommonActions.reset({
//           index: 0,
//           routes: [{name: 'AuthStack'}],
//         }),
//       );
//     } else {
//       dispatch(
//         ModalHandler({
//           show: true,
//           type: 'Error',
//           message: response?.response_message,
//         }),
//       );
//     }
//   } else {
//     if (response?.data?.response_code === 401) {
//       dispatch(
//         ModalHandler({
//           show: true,
//           type: 'Error',
//           message: I18n.t('logged_out_alert'),
//         }),
//       );
//       dispatch({type: 'USER_TYPE', payload: null});
//       navigation.dispatch(
//         CommonActions.reset({
//           index: 0,
//           routes: [{name: 'AuthStack'}],
//         }),
//       );
//     } else {
//       dispatch(
//         ModalHandler({
//           show: true,
//           type: 'Error',
//           message: response?.data?.response_message,
//         }),
//       );
//     }
//   }
// };

export const getAddressString = obj => {
  return `${obj?.villa_or_apartment} ${obj?.house_number} ${obj?.street} ${obj?.area} ${obj?.city} ${obj?.country}`;
};

// first letter capitalize
export const capitalize = str => str?.charAt(0).toUpperCase() + str?.slice(1);

// deep clone an object
export const deepClone = obj => {
  var copy;

  // eslint-disable-next-line
  if (obj == null || typeof obj != 'object') {
    return obj;
  }

  // Handle Array
  if (obj instanceof Array) {
    copy = [];
    for (var i = 0, len = obj.length; i < len; i++) {
      copy[i] = deepClone(obj[i]);
    }
    return copy;
  }

  // Handle Object
  if (obj instanceof Object) {
    copy = {};
    for (var attr in obj) {
      if (obj.hasOwnProperty(attr)) {
        copy[attr] = deepClone(obj[attr]);
      }
    }
    return copy;
  }

  throw new Error("Unable to copy obj! Its type isn't supported.");
};

// check if empty or not
export const isEmpty = (object, dataType = 'object') => {
  switch (dataType) {
    case 'object': {
      return !Object.keys(object).length;
    }
    default: {
      return false;
    }
  }
};

//check if object has any true value in it or not
export const checkTrueValue = obj => {
  const valuesOfObject = Object.values(obj);
  const TrueFalse = valuesOfObject.includes(true);
  return TrueFalse;
};
//Remove a value from array
export const removerValue = (item, index, qty) => {
  const selectedItem = item?.splice(index, qty);
  const finalArray = item?.filter(item => {
    return item !== selectedItem;
  });
  return finalArray;
};

//Check For Numbers Only
export const isNumber = mobile => {
  if (mobile) {
    let regex = new RegExp(/^[0-9]*$/);
    return regex.test(mobile);
  } else return false;
};
// Check WHITE space
export const checkWhiteSpace = text => {
  const _text = text.trim();
  return text === _text;
};

export const searchArray = (data, keyword) => {
  const result = [];
  data.forEach(item => {
    let matched = false;
    Object.keys(item).forEach(key => {
      if (
        item &&
        typeof item[key] == 'string' &&
        item[key]?.toLowerCase().match(keyword.toLowerCase())
      ) {
        return (matched = true);
      } else if (item && typeof item[key] == 'object') {
        if (item[key]) {
          Object.keys(item[key]).forEach(val => {
            if (
              item[key][val] &&
              typeof item[key][val] == 'string' &&
              item[key][val]?.toLowerCase().match(keyword.toLowerCase())
            ) {
              return (matched = true);
            }
          });
        }
      }
    });
    if (matched) result.push(item);
  });
  return result;
};

export const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const urlReg =
  /^(http[s]?:\/\/(www\.)?|ftp:\/\/(www\.)?|www\.){1}([0-9A-Za-z-\.@:%_\+~#=]+)+((\.[a-zA-Z]{2,3})+)(\/(.)*)?(\?(.)*)?/g;

export const numberReg = /^\+|0{1,}(?:[0-9] ?){6,14}[0-9]$/;
