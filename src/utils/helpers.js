class Cookie {
  setCookie(name, value, options) {
    options = options || {}

    let expires = options.expires

    if (typeof expires == 'number' && expires) {
      let d = new Date()
      d.setTime(d.getTime() + expires * 1000)
      expires = options.expires = d
    }
    if (expires && expires.toUTCString) {
      options.expires = expires.toUTCString()
    }

    value = encodeURIComponent(value)

    let updatedCookie = name + '=' + value

    for (let propName in options) {
      updatedCookie += '; ' + propName
      let propValue = options[propName]
      if (propValue !== true) {
        updatedCookie += '=' + propValue
      }
    }

    document.cookie = updatedCookie
  }

  deleteCookie(name) {
    this.setCookie(name, '', {
      expires: -1
    })
  }

  getCookie(name) {
    var matches = document.cookie.match(
      new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
    )
    return matches ? decodeURIComponent(matches[1]) : undefined
  }
}

export default new Cookie()

function parseQuery(searchQuery, name) {
  const params = new URLSearchParams(searchQuery)
  return params.get(name)
}

export {parseQuery}
