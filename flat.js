function flat (obj, prefix, flatten) {
  if (typeof obj === 'string') {
    return flatten.concat(prefix + obj)
  }

  if (Array.isArray(obj)) {
    return flatten.concat([[prefix + obj[0], obj.slice(1)]])
  }

  if (typeof obj === 'object' && obj.prefix && Array.isArray(obj.names)) {
    return obj.names.reduce(function (flatten, name) {
      return flat(name, prefix + obj.prefix, flatten)
    }, flatten)
  }

  return flatten
}

var handlers = {
  require: function (element) {
    if (Array.isArray(element)) {
      return [require(element[0])].concat(element.slice(1))
    }
    return require(element)
  },
  string: function (element) {
    if (Array.isArray(element)) {
      return element[0]
    }
    return element
  }
}

module.export = function (obj, handler) {
  var result = flat(obj, '', [])

  if (!handler || !handlers[handler]) {
    return result
  }

  return result.map(handlers[handler])
}
