type entryItem = {
  src: string;
  title?: string;
};
export default {
  getDictVoiceUrl: (type, text): string => {
    return encodeURI(`http://dict.youdao.com/dictvoice?type=${type}&audio=${text}`);
  },
  getListDictVoiceUrl: function (type, list: Array<entryItem>): Array<entryItem> {
    return list.map(item => {
      return {
        src: this.getDictVoiceUrl(type, item.src),
        title: item.title
      };
    });
  }
};
