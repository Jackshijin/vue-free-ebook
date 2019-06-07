// import WebStorageCache from 'web-storage-cache'
//
// const wsCache = new WebStorageCache();
// export function getLocalStorage(key) {
//   return wsCache.get(key)
// }
//
// export function setLocalStorage(key, value, expire = 30 * 24 * 3600) {
//   return wsCache.set(key, value, { exp: expire })
// }
//
// export function removeLocalStorage(key) {
//   return wsCache.remove(key)
// }
//
// export function clearLocalStorage() {
//   return wsCache.clear()
// }
//
// export function setBookObject (fileName, key, value) {
//   let book = getLocalStorage(`${fileName}-info`)
//   if (!book) {
//     book = {}
//   } else {
//     book[key] = value
//     setLocalStorage(`${fileName}-info`, book)
//   }
// }
//
// export function getBookObject (fileName, key) {
//   let book = getLocalStorage(`${fileName}-info`)
//   if (book) {
//     return book[key]
//   } else {
//     return null
//   }
// }
//
// export function getFontFamily(fileName) {   // 获取字体方法
//   return getBookObject(fileName, 'fontFamily')
// }
//
// export function saveFontFamily (fileName, font) {  // 保存字体
//   return setBookObject(fileName, 'fontFamily', font)
// }

// let storage = {
//   setLocalStorage(key, value) {
//     localStorage.setItem(key, JSON.stringify(value));
//   },
//   getLocalStorage (key) {
//     return JSON.parse(localStorage.getItem(key));
//   },
//   removeLocalStorage (key) {
//     localStorage.removeItem(key);
//   },
//   clearLocalStorage () {
//     localStorage.clear();
//   },
//   setBookObject (fileName, key, value) {
//     let book = getLocalStorage(`${fileName}-info`);
//     if (!book) {
//     book = {};
//     } else {
//     book[key] = value;
//     setLocalStorage(`${fileName}-info`, book);
//     }
//   },
//   getBookObject (fileName, key) {
//     let book = getLocalStorage(`${fileName}-info`);
//     if (book) {
//       return book[key];
//     } else {
//       return null;
//     }
//   },
//   getFontFamily (fileName) {
//     return getBookObject(fileName, 'fontFamily');
//   },
//   saveFontFamily (fileName, font) {
//     return setBookObject(fileName, 'fontFamily', font);
//   }
// };
// export default storage;

export function setLocalStorage (key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}
export function getLocalStorage (key) {
  return JSON.parse(localStorage.getItem(key))
}
export function removeLocalStorage (key) {
  localStorage.removeItem(key)
}
export function clearLocalStorage () {
  localStorage.clear()
}

export function getFontFamily (fileName) {
  return getBookObject(fileName, 'fontFamily')
}
export function saveFontFamily (fileName, font) {
  return setBookObject(fileName, 'fontFamily', font)
}

export function getFontSize (fileName) {
  return getBookObject(fileName, 'fontSize')
}

export function saveFontSize (fileName, fontSize) {
  return setBookObject(fileName, 'fontSize', fontSize)
}

export function getTheme (fileName) {
  return getBookObject(fileName, 'theme')
}

export function saveTheme (fileName, theme) {
  return setBookObject(fileName, 'theme', theme)
}

export function getLocation (fileName) {
  return getBookObject(fileName, 'location')
}
export function saveLocation (fileName, location) {
  return setBookObject(fileName, 'location', location)
}
export function getBookmark (fileName) {
  return getBookObject(fileName, 'bookmark')
}
export function saveBookmark (fileName, bookmark) {
  return setBookObject(fileName, 'bookmark', bookmark)
}
export function getReadTime (fileName) {
  return getBookObject(fileName, 'readTime')
}
export function saveReadTime (fileName, readTime) {
  return setBookObject(fileName, 'readTime', readTime)
}

export function saveBookShelf (shelf) {
  return setLocalStorage('shelf', shelf)
}

export function getBookShelf () {
  return getLocalStorage('shelf')
}

export function setBookObject (fileName, key, value) {
  let book = {}
  if (getLocalStorage(`${fileName}-info`)) {
    book = getLocalStorage(`${fileName}-info`)
  }
  book[key] = value
  setLocalStorage(`${fileName}-info`, book)
}

export function getBookObject (fileName, key) {
  if (getLocalStorage(`${fileName}-info`)) {
    return getLocalStorage(`${fileName}-info`)[key]
  } else {
    return null
  }
}

export function getLocale () {
  return getLocalStorage('locale')
}

export function saveLocale (locale) {
  return setLocalStorage('locale', locale)
}
