/* global Node */
let Index = {
  props: ['config', 'localConfig', 'utils'],
  data () {    
    this.$i18n.locale = this.config.localConfig
    return {
      fieldTitle: `布丁布丁吃什麼？`,
      fieldFavicon: `https://blog.pulipuli.info/favicon.ico`,
      fieldFindFavicon: ''
    }
  },
//  components: {
//  },
  computed: {
    faviconName () {
      if (this.localConfig.fieldFavicon)
      {
         let u = new URL(this.localConfig.fieldFavicon)
         return u.pathname
      }
      return "";
    },
    linkFavicon () {
      let url = this.localConfig.fieldFavicon.trim()
      let icon = this.fieldFaviconResized
      let filename = this.faviconName
      //console.log(filename)
      if (filename.endsWith('.ico')) {
        // https://blog.pulipuli.info/favicon.ico
        return `<link href="${icon}" rel="icon" type="image/x-icon">`
      }
      else if (filename.endsWith('.png')) {
        // https://lh3.googleusercontent.com/-tkBPlsBsFJg/V0M0b-gPKNI/AAAAAAACw9Y/Y-2BGg4z3H4/Image.jpg?imgmax=800
        return `<link rel="icon" type="image/png" href="${icon}" />`
      }
      else if (url.startsWith('https://blogger.googleusercontent.com/img/a/')) {
        // https://blogger.googleusercontent.com/img/a/AVvXsEhYezHn2JYaLzJ66yXkj2mKIgQal4NLFF-B49GclB-k_lCbX_92POMABLo8W9HouT90uPSTivtDCuhjvFM3FXUSYNpLEJTvo0Hv7ukEnCjGh9JrAM3-cCPwziVu1ihs-pp7PLTanmZToRii2Z4NVggyy_4etvxIkN-6W7WlZL81bBJCmM0910I
        return `<link rel="icon" type="image/png" href="${url}" />`
      }
      else if (url.startsWith('https://imgur.com/a/')) {
        // https://blogger.googleusercontent.com/img/a/AVvXsEhYezHn2JYaLzJ66yXkj2mKIgQal4NLFF-B49GclB-k_lCbX_92POMABLo8W9HouT90uPSTivtDCuhjvFM3FXUSYNpLEJTvo0Hv7ukEnCjGh9JrAM3-cCPwziVu1ihs-pp7PLTanmZToRii2Z4NVggyy_4etvxIkN-6W7WlZL81bBJCmM0910I
        return `<link rel="icon" type="image/png" href="${url}.png" />`
      }
      else if (filename.endsWith('.jpg')
              || filename.endsWith('.jpeg')) {
        return `<link rel="icon" type="image/jpeg" href="${icon}" />`
      }
      else if (filename.endsWith('.gif')) {
        return `<link rel="icon" type="image/gif" href="${icon}" />`
      }
      return ''
    },
    fieldFaviconResized () {
      let icon = this.localConfig.fieldFavicon.trim()
      
      // https://lh3.googleusercontent.com/-XbSdu-ANc-0/YRIs-lEv0YI/AAAAAAAFBIE/kDgHDim7xNQsBbGCLK-FiK_1m8QifyIrQCLcBGAsYHQ/s256/Picture3.png
      if (icon.startsWith('https://lh3.googleusercontent.com/') 
              && icon.indexOf('/s1600/') > -1) {
        icon = icon.split('/s1600/').join('/s256/')
      }
      
      return icon
    },
    fieldOutput () {
      /*
      return `<head>
  <title>${this.localConfig.fieldTitle}</title>
  ${this.linkFavicon}
  <link rel="manifest" href="https://pulipulichen.github.io/Chrome-Shortcut-Head-Modifier/manifest-for-link.json">
</head>`
      */
      return `<head>
  <title>${this.localConfig.fieldTitle}</title>
  ${this.linkFavicon}
</head>`
    },
    fieldFindFaviconEncoded () {
      return encodeURIComponent(this.fieldFindFavicon.trim())
    },
    linkFindIcon () {
      return `https://findicons.com/search/` + this.fieldFindFaviconEncoded
    },
    linkIconNinja () {
      return `https://www.iconninja.com/tag/` + this.fieldFindFaviconEncoded + '-icon'
    },
    linkFlaticon () {
      // https://www.flaticon.com/search?word=sleep&type=icon&color=color&order_by=4
      return `https://www.flaticon.com/search?word=${this.fieldFindFaviconEncoded}&type=icon&color=color&order_by=4`
    }
  },
//  watch: {
//  },
  mounted () {
    this.config.inited = true
  },
  methods: {
    copyFieldOutput () {
      this.utils.ClipboardUtils.copyPlainString(this.fieldOutput)
    }
  }
}

export default Index