import justIsEmpty from 'just-is-empty'
import scrollIntoView from 'scroll-into-view'

// export const noop = () => {}

export function on (obj, ...args) {
  if (obj && obj.addEventListener) {
    obj.addEventListener(...args)
  }
}

export function off (obj, ...args) {
  if (obj && obj.removeEventListener) {
    obj.removeEventListener(...args)
  }
}

export const getTarget = (target) => target === '_blank' ? target : null

export const isBrowser = typeof window !== 'undefined'

export const isNavigator = typeof navigator !== 'undefined'

export const replaceStr = (str, search, replace) => str.replace(search, replace)

export const getTargetLink = (target) => {
  if (target === 'Abrir en una nueva pestaña') {
    return '_blank'
  }

  return '_self'
}

export const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

/**
 * Get image url from contentful image object
 * @param {Object} image
 * @returns {string}
 */
export const getImageUrl = ({ fields }) => {
  if (justIsEmpty(fields)) {
    return null
  }

  const { file } = fields

  // Validate image url
  if (!validURL(file?.url)) {
    if (file.url.startsWith('//')) {
      return `https:${file.url}`
    }

    // TODO: validate image url in other ways

    console.error(`Invalid image url: ${file.url}`)
    return null
  }

  return file?.url ?? null
}

/**
 * Get image file from contentful image object
 * @param {Object} image
 * @returns {Object}
 */
export const getImageFile = ({ fields } ) => {
  if (justIsEmpty(fields)) {
    return null
  }

  const { file, title, description } = fields

  if (!validURL(file?.url) && file?.url.startsWith('//')) {
    file.url = `https:${file.url}`
  }

  return {
    ...file,
    title,
    description
  }
}

export const validURL = (str) => {
  const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i') // fragment locator

  return !!pattern.test(str)
}

export const getFileUrl = (url) => validURL(url) ? url : process.env.NEXT_PUBLIC_API_URL + url

// Validate string or number if it is empty
export const isEmpty = (val) => {
  if (typeof val === 'string') {
    return val.trim().length === 0
  }

  if (typeof val === 'number') {
    return val === 0
  }

  return true
}

// Get device type
export function getDeviceOS () {
  if (!isBrowser) {
    return {}
  }

  const ua = window.navigator.userAgent

  const deviceInfo = {
    android: false,
    ios: false,
    other: false
  }

  if (/android/i.test(ua)) {
    deviceInfo.android = true
  } else if (
    /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
  ) {
    deviceInfo.ios = true
  } else {
    deviceInfo.other = true
  }

  return deviceInfo
}

export const scrollToElement = ({ id, topOffset }) => {
  const element = document.querySelector(id)
  if (element) {
    scrollIntoView(element, {
      time: 500,
      align: { top: 0, topOffset }
    })
  }
}
