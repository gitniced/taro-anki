export default {

  getDictVoiceUrl: (type, text): string => {
    return encodeURI(`http://dict.youdao.com/dictvoice?type=${type}&audio=${text}`)
  }
} 