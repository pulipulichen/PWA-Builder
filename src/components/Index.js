/* global Node */
let Index = {
  props: ['config', 'localConfig', 'utils'],
  data () {    
    this.$i18n.locale = this.config.localConfig
    return {
      fieldTitle: `布丁布丁吃什麼？`,
      fieldFavicon: `https://blog.pulipuli.info/favicon.ico`,
      fieldFindFavicon: '',
      faviconRationCorrect: true,
      presetForm: [
        'https://lh3.googleusercontent.com/-wnyoHaAvRK0/YVk47pyjGOI/AAAAAAAFBpA/yFsr8jfP7XkkLJu-Fu6dMKgQvH72Se2WQCLcBGAsYHQ/s1600/sheet-Alecive-Flatwoken-Apps-Google-Drive-Forms.png',
        'https://lh3.googleusercontent.com/-QzjgpOBowlg/YVk8oRqDgSI/AAAAAAAFBpM/fQwGZB6eztI6yx1MVPBe8GQ36D_VpYrRwCLcBGAsYHQ/s1600/sheet-yellow-Alecive-Flatwoken-Apps-Google-Drive-Forms.png',
        'https://lh3.googleusercontent.com/-E85g18o8SG0/YVk8oWDBNiI/AAAAAAAFBpQ/bmL0gX7ooKIw44s-Lmiz0HhYITCt87pIwCLcBGAsYHQ/s1600/sheet-pink-Alecive-Flatwoken-Apps-Google-Drive-Forms.png',
        'https://lh3.googleusercontent.com/-KggvrRwyGXA/YVk8ocMehyI/AAAAAAAFBpI/beeiCgBqKQQL6RVG-8DCV6-2D-afb6J0ACLcBGAsYHQ/s1600/sheet-blue-Alecive-Flatwoken-Apps-Google-Drive-Forms.png',
        'https://lh3.googleusercontent.com/-xfQx6yrdsuM/YVk8-BAU-xI/AAAAAAAFBpg/W13l0RFbMzcWwICoQRa9nD0RkxuEFBi2QCLcBGAsYHQ/s1600/sheet-Alecive-Flatwoken-Apps-Google-Drive-Forms-red.png'
      ],
      presetSlide: [
        'https://lh3.googleusercontent.com/-f6XuWkPsrEk/Ycq9X8RiDuI/AAAAAAAFEVQ/BYUhx02M45UMVbt3LpwvHUdBP8t-WiVjQCNcBGAsYHQ/s1600/slides-icon-6-yellow.jpg',
        'https://lh3.googleusercontent.com/-1CgE5pWZeAs/Ycq9X7asC4I/AAAAAAAFEVY/lm6ESmREnnkRiFShs79QMbhqXZqXnttqgCNcBGAsYHQ/s1600/slides-icon-6-green.jpg',
        'https://lh3.googleusercontent.com/-85cciDhiyJc/Ycq9XwVnjCI/AAAAAAAFEVU/pwOkigjtkDIAS__aYC7VAw5tfciTLatmgCNcBGAsYHQ/s1600/slides-icon-6-blue.jpg',
        'https://lh3.googleusercontent.com/-2veas9B3Y60/Ycq9X9RBbRI/AAAAAAAFEVc/Ndb2TpBLtGsrY568e1aw8Ev6UDEbg_LmACNcBGAsYHQ/s1600/slides-icon-6-red.jpg',
        'https://lh3.googleusercontent.com/-WqA0AZAmyjk/Ycq9XwpNxCI/AAAAAAAFEVM/xe6bhZ3umTgoNupaHANcCO20VNvjpiZHwCNcBGAsYHQ/s1600/slides-icon-6-gray.jpg'
      ],
      presetDoc: [
        'https://lh3.googleusercontent.com/-3VWx8YodNfU/YcrAMBrI0bI/AAAAAAAFEWA/xw13o-kGx5Mq2eh_XXNZZn85zPmCYcWoACNcBGAsYHQ/s1600/google-drive-docs-blue.png',
        'https://lh3.googleusercontent.com/-VXebmgMD4YI/YcrALAC2yEI/AAAAAAAFEV0/Een_1-Mo_WUJSSH5fEEt6t6f4htKMT_SgCNcBGAsYHQ/s1600/google-drive-docs-green.png',
        'https://lh3.googleusercontent.com/-lY-8xi6YnH4/YcrAK55ofGI/AAAAAAAFEVw/cXDKz5J4foY67YHKgUGwNFy9m_Jwi0rbACNcBGAsYHQ/s1600/google-drive-docs-red.png',
        'https://lh3.googleusercontent.com/-z2_QkX_8BUY/YcrALBw2SnI/AAAAAAAFEV4/ksiiGadc9rQG0bdk8puki8g4fojAlAOMgCNcBGAsYHQ/s1600/google-drive-docs-yellow.png',
        'https://lh3.googleusercontent.com/-b1LLQ-Ac22A/YcrALP6DVcI/AAAAAAAFEV8/trGSFLUwtMcPOygoCFJdeeobpx9PX5DvACNcBGAsYHQ/s1600/google-drive-docs-gray.png'
      ],
      presetSheet: [
        'https://blogger.googleusercontent.com/img/a/AVvXsEjTPFZczYG4fmpoPDVISoxJZ_xNOLCDXm-pryNsS7igZ3mrZP9I654mf3hmqiuXBw6xW_G_m24RlsoddwnUM7XZ8YTEAGf_u0iM4RaXPr6LCk_r7iwF34LfDpbk3akuDLU-I1muTD-OtAlR0OdF9q1ppa-n8admztfrBsc2EPTjq8r5I0RATqI',
        'https://blogger.googleusercontent.com/img/a/AVvXsEiuv6LamrX2j1I9_P21g3u8Hpbq48DHThnQ4LBA002CKpQhHZTZBtK2K5qiVBoYIn-L76zuGKMhdbseA6X0cKSz0z6xB94cJ41MPd6-aJI4Mw_3f1JwbBgLMsTuz5V-K0rlXU-lkm43rCvA08IBT0VKA2BP6BRmRgYOvx2oJ-R29NB3fuIHnd0',
        'https://blogger.googleusercontent.com/img/a/AVvXsEinWSd_rloHEn_F4baNBgllWu7xn_F88pPcCqLrotOWw28sKL1gl430g2lPNKv8baPYIMb4e2OoSjjsAOnjNdAnRXthklaK2PA_C3I_6pel4iJIQZW5nH5HI6gmVzlTwScie1MJ795V8BGTp_atyCPqk5HHmpb6Tv7PFP8EIQ2tveGtxSiMMuQ',
        'https://blogger.googleusercontent.com/img/a/AVvXsEgxWyIxIErpPZOzGIg4f6tkPGCemW3Z6Dm0Vb9fKelCg7v__muicvFCrDFkL5dDUorliLGR-IOXTBg6tx4RYJzfSuHj-L9QX1KfpGFlu3-7pz1Nch0bekdgr-v_3wViZCg2GoYI6WIjS3zyJPGQBnkiPOiAOBlDxO34oJDbueA8hg9veYARnpM',
        'https://blogger.googleusercontent.com/img/a/AVvXsEjUW1yheRmYBipem7aAfQAE04-Q13pg3tNYyVZLt0hxcLR4TlZkv18elQ8HwL18mVjyZCzZZOqS1ZbltBdsuBLzKOJGxSjtoonhIb6NsJCH7QS4EuSXu01K7Mxc5ESj-kNggAB1A9M5-eyeeehtc_NCWLctAJnZBlg1-9Sd79h8YLaPr8BrvCM',
      ],
      presetKanban: [
        'https://blogger.googleusercontent.com/img/a/AVvXsEgOYTqwRWziFjt3RFm8NdxufP9_lqBXoSkOfLSQiy9LH-0Wg1978jDSWYCAbfNnRof49FDpS-P-GrH2fXGX_b2Uvx6RCLnTyTjJwLfnAS1RAYxp5YfEI1xIDytrArjGi6e4mi37vtfe46LPIrFfFdMrf0A1JkLR8ZKbBjqzs4HbxsjPl7RoBmo',
        'https://blogger.googleusercontent.com/img/a/AVvXsEh139sHtZuItDpBF9KRSN-v_Ktbu8GHrLfTFaJMwJixh6B5fgfDaSzxvJkyg9dDJ1uQBWadERJdY0ekfsZ0D-2huvoU7OTaan6mYqwAUutW2R2nUWlZf0KIzt-aSPgEhIc9eudRqviAMOZANf6eQMutMAvxI6vEBbfZ4MoqXIGkGkipllr7HMc',
        'https://blogger.googleusercontent.com/img/a/AVvXsEiFnyubFqUbGuDMhs6oLYIObpOjryPaD8ncAg2LD643LeU-Aj-j7js8G-n9AdXkToqklJ9cfxb815gKg_b4X7RYf0N9vyk18Xs_q8zx7hzyBkOBUWUAGQ4MgfCJ4tH9zU-m5dnXvHwlQkJINHSQL7T-mUdLFj4sM0C5c6rhUJkhAltHmlWxsJ4',
        'https://blogger.googleusercontent.com/img/a/AVvXsEjgrUYNj1MRMWHi1QVFTT5mUwYvphTcALfuNrvCV9aYZtpn84qqAJ7msly2rqhTMGcnUG6D2gcOxntKhEypFESoVjnwxuepAdoW7ajh9t7mhlPrvlgQ9zPVLt-egc5OXTynpuM0i4ayZNCg9OKutAcVAnYmf1887Fmk6551Ld77jUHTmhDocuY',
        'https://blogger.googleusercontent.com/img/a/AVvXsEhCzkq80AhuiNCoMwLgCWE8p5vJ0IqGdJvr1m-Opk8MzZjGz4ZxtBAz5zo-WB8cMAlY7fd8rYTkD8HhvDWkTj4EmnnaelFlRe_Ia0QBm3M_Qs4WJjsKn2F62KqRZgreBXjqhEk8-o2ZvoBphTj-yeBKYiubMLzWtSGWQTGdRb-Ifo2mfqtcJQ0',
      ],
      presetGitMind: [
        'https://blogger.googleusercontent.com/img/a/AVvXsEjuvReW7tZMzos67tRaYSLwdEkEXjW_BgofjkRY0vJNBPZAGjHVPrx_qxlZ4jrr98WXhTJ8WBps5_MzpMIRUE6aQtPQqlKqUPD_n1a9WMX3hu_Xg8q9SLr9sD46_tNs6UWN6Eiq5WYEZEs5_4HBWj30LkxGmbKju0XM8xNuQWVj9k_lYAQ_Yzg',
        'https://blogger.googleusercontent.com/img/a/AVvXsEhIMXRslbOPHs4DS0StzmAZyHmCAHNiMEA06ssl_9ALBke5X4b9O_2Gg92DsZrGUcKDxQ0gCTU9ZjCyeeBfeVsv2bs9SgLys4f0vH3kGk74iNAtz3yMiiFTUylM-Oop_qSYZzWcAd6aWDfvJyVSC3vrOO4TJsmJoaJY-jMx49ZIt9c1guYWuFA',
        'https://blogger.googleusercontent.com/img/a/AVvXsEhVXqRsf0e4yl-mEfY80tO9MCNtvN2KKyC1zq957xtsWBjBAwPW8fWsiQTaw9foi6S3GjX6-41FV790ubA_R_8mSM8QEaKiB8k9abCRnV5muSLxn7mF9UMn2y_SEBJ0oJqMYiaWdDXvQWCAjxYLlELSm7VaV_D-a2Phykxf6mlaKzS3ggWIQQU',
        'https://blogger.googleusercontent.com/img/a/AVvXsEidXQpXLf1-Whg58ahiSW8uBlg9hJYU9lAz2ASM5ry2He2DBU3xT5UIJTFl8BZJkoXOEPKc36sKSnD82rv9eFx_BZn--Nda7GHL9AthHC9CM3FCUOK6K_sOE37-b4O_CSk1icdUVBQXvW2qpPcRRSKajsgOxdk0Py1dfu7Y2rMm0EKpodBf2TU',
        'https://blogger.googleusercontent.com/img/a/AVvXsEj2R9Hs-KfLmfg8EfTgOic3q9nj-a6gaM_z51GwxMNv-IZn8B6gR4xAD4wWk3CBAsCYLIurETjNxZD2YtCOWvXPWjwFXk5RA-Uvt0Fxqc90whjYH99sZgZPTvyC64vgYrXmDFcamOclV0_MCpCtuF06fjsFSB8c2xrHrQ9zkMOyJP6BbDZbi84'
      ],
      iconHistory: []
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
        return `<link rel="icon" type="image/png" href="${icon}" />`
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

    linkFaviconHref () {
      let linkHTML = this.linkFavicon

      // Create a temporary DOM element
      var tempElement = document.createElement('div');
      tempElement.innerHTML = linkHTML;

      // Find the link element and get the href attribute value
      var linkElement = tempElement.querySelector('link');
      var hrefValue = linkElement.getAttribute('href');

      return hrefValue
    },
    linkFaviconSrc () {
      let url = this.localConfig.fieldFavicon.trim()
      let icon = this.fieldFaviconResized
      let filename = this.faviconName
      //console.log(filename)

      // https://gist.github.com/ericelliott/90602152915b615b761c113f82243146
      if (filename.endsWith('.ico')) {
        // https://blog.pulipuli.info/favicon.ico
        // return `<link href="${icon}" rel="icon" type="image/x-icon">`
        return {
          src: icon,
          type: "image/x-icon",
          "purpose":"any"
        }
      }
      else if (filename.endsWith('.png')) {
        // https://lh3.googleusercontent.com/-tkBPlsBsFJg/V0M0b-gPKNI/AAAAAAACw9Y/Y-2BGg4z3H4/Image.jpg?imgmax=800
        // return `<link rel="icon" type="image/png" href="${icon}" />`
        return {
          src: icon,
          type: "image/png",
          "purpose":"any"
        }
      }
      else if (url.startsWith('https://blogger.googleusercontent.com/img/a/')) {
        // https://blogger.googleusercontent.com/img/a/AVvXsEhYezHn2JYaLzJ66yXkj2mKIgQal4NLFF-B49GclB-k_lCbX_92POMABLo8W9HouT90uPSTivtDCuhjvFM3FXUSYNpLEJTvo0Hv7ukEnCjGh9JrAM3-cCPwziVu1ihs-pp7PLTanmZToRii2Z4NVggyy_4etvxIkN-6W7WlZL81bBJCmM0910I
        // return `<link rel="icon" type="image/png" href="${icon}" />`
        return {
          src: icon,
          type: "image/png",
          "purpose":"any"
        }
      }
      else if (url.startsWith('https://imgur.com/a/')) {
        // https://blogger.googleusercontent.com/img/a/AVvXsEhYezHn2JYaLzJ66yXkj2mKIgQal4NLFF-B49GclB-k_lCbX_92POMABLo8W9HouT90uPSTivtDCuhjvFM3FXUSYNpLEJTvo0Hv7ukEnCjGh9JrAM3-cCPwziVu1ihs-pp7PLTanmZToRii2Z4NVggyy_4etvxIkN-6W7WlZL81bBJCmM0910I
        // return `<link rel="icon" type="image/png" href="${url}.png" />`
        return {
          src: url + '.png',
          type: "image/png",
          "purpose":"any"
        }
      }
      else if (filename.endsWith('.jpg') || 
        filename.endsWith('.jpeg')) {
        // return `<link rel="icon" type="image/jpeg" href="${icon}" />`
        return {
          src: icon,
          type: "image/jpeg",
          "purpose":"any"
        }
      }
      else if (filename.endsWith('.gif')) {
        // return `<link rel="icon" type="image/gif" href="${icon}" />`
        return {
          src: icon,
          type: "image/gif",
          "purpose":"any"
        }
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
      // https://blogger.googleusercontent.com/img/a/AVvXsEhWN4vJFmeSfDkLgSyOgxuyqTzfPhwbdvwrRrqH4dtcdpRpWnk9YNxySCsV6t5DOavFtWPk3Gx5pcsI3nEfoBJhsMqaKavBVGZdZ8EcbuJY5GG3kTdEw5bWjE82H3O4Fc6m3p1X-p9p-6JBS6brz5qI654y9l75etUnSnYmMF6yePLyP4VaVw8
      else if (icon.startsWith('https://blogger.googleusercontent.com/img/a/') 
              && !icon.endsWith('=s256')) {
        icon = icon + '=s256'
      }
      
      return icon
    },
    filteredScope () {
      let scope = this.localConfig.fieldScope

      if (scope.indexOf('#') > -1) {
        scope = scope.substring(0, scope.indexOf('#'))
      }

      return scope
    },
    fieldOutput () {
      /*
      return `<head>
  <title>${this.localConfig.fieldTitle}</title>
  ${this.linkFavicon}
  <link rel="manifest" href="https://pulipulichen.github.io/Chrome-Shortcut-Head-Modifier/manifest-for-link.json">
</head>`
      */
      let manifestJSON = {
        start_url: this.localConfig.fieldStartURL,
        scope: this.filteredScope,
        display: "standalone",
        name: encodeURIComponent(this.localConfig.fieldTitle.trim()),
        icons: [this.linkFaviconSrc]
      }

      manifestJSON = JSON.stringify(manifestJSON)
      manifestJSON = manifestJSON.replace(/"/g, '&quot;')
      manifestJSON = this.utils.HTMLUtils.encodeHTMLEntities(manifestJSON)
      // manifestJSON = this.utils.HTMLUtils.encodeHTMLEntities(manifestJSON)

      return `<head>
  <title>${this.localConfig.fieldTitle.trim()}</title>${this.linkFavicon}<link rel="manifest" href="data:application/manifest+json,${manifestJSON}"><meta http-equiv="Permissions-Policy" content="interest-cohort=()">
</head>`
    },
    fieldOutputJS () {
      /*
      return `<head>
  <title>${this.localConfig.fieldTitle}</title>
  ${this.linkFavicon}
  <link rel="manifest" href="https://pulipulichen.github.io/Chrome-Shortcut-Head-Modifier/manifest-for-link.json">
</head>`
      */
      let manifestJSON = {
        start_url: this.localConfig.fieldStartURL,
        scope: this.filteredScope,
        display: "standalone",
        name: encodeURIComponent(this.localConfig.fieldTitle.trim()),
        icons: [this.linkFaviconSrc]
      }

      manifestJSON = JSON.stringify(manifestJSON)
      manifestJSON = manifestJSON.replace(/"/g, '&quot;')
      // manifestJSON = this.utils.HTMLUtils.encodeHTMLEntities(manifestJSON)
      // manifestJSON = this.utils.HTMLUtils.encodeHTMLEntities(manifestJSON)

      /*
      return `document.getElementsByTagName("head")[0].innerHTML = \`<head>
  <title>${this.localConfig.fieldTitle.trim()}</title>${this.linkFavicon}<link rel="manifest" href="data:application/manifest+json,${manifestJSON}"><meta http-equiv="Permissions-Policy" content="interest-cohort=()">
</head>\``
      */
      return `document.title = "${this.localConfig.fieldTitle.trim()}";
var link = document.createElement('link');link.rel = 'icon';link.type = 'image/png';link.href = '${this.linkFaviconHref}';document.head.appendChild(link);
var linkElement = document.querySelector('link[rel="manifest"]');if (linkElement) { linkElement.parentNode.removeChild(linkElement);}link = document.createElement('link');link.rel = 'manifest';link.href = 'data:application/manifest+json,${manifestJSON}';document.head.appendChild(link);`

    },
    fieldOutputJSHead () {
      /*
      return `<head>
  <title>${this.localConfig.fieldTitle}</title>
  ${this.linkFavicon}
  <link rel="manifest" href="https://pulipulichen.github.io/Chrome-Shortcut-Head-Modifier/manifest-for-link.json">
</head>`
      */
      let manifestJSON = {
        start_url: this.localConfig.fieldStartURL,
        scope: this.filteredScope,
        display: "standalone",
        name: encodeURIComponent(this.localConfig.fieldTitle.trim()),
        icons: [this.linkFaviconSrc]
      }

      manifestJSON = JSON.stringify(manifestJSON)
      manifestJSON = manifestJSON.replace(/"/g, '&quot;')
      // manifestJSON = this.utils.HTMLUtils.encodeHTMLEntities(manifestJSON)
      // manifestJSON = this.utils.HTMLUtils.encodeHTMLEntities(manifestJSON)

      return `document.getElementsByTagName("head")[0].innerHTML = \`<head>
  <title>${this.localConfig.fieldTitle.trim()}</title>${this.linkFavicon}<link rel="manifest" href="data:application/manifest+json,${manifestJSON}"><meta http-equiv="Permissions-Policy" content="interest-cohort=()">
</head>\``
      
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
    },
    presetList () {
      let list = [
        'presetForm',
        'presetSlide',
        'presetDoc',
        'presetSheet',
        'presetKanban',
        'presetGitMind'
      ]

      console.log(list)

      let first = this.localConfig.lastPreset
      if (list.indexOf(first) > -1) {
        list.sort(function(x,y){ return x == first ? -1 : y == first ? 1 : 0; });
      }

      return list.map((item) => {
        return {
          item,
          links: this[item + 'Sorted']
        }
      })
    },
    presetDocSorted () {
      return this.sortPreset(this.presetDoc, this.localConfig.presetDocLast)
    },
    presetSlideSorted () {
      return this.sortPreset(this.presetSlide, this.localConfig.presetSlideLast)
    },
    presetFormSorted () {
      return this.sortPreset(this.presetForm, this.localConfig.presetFormLast)
    },
    presetSheetSorted () {
      return this.sortPreset(this.presetSheet, this.localConfig.presetSheetLast)
    },
    presetKanbanSorted () {
      return this.sortPreset(this.presetKanban, this.localConfig.presetKanbanLast)
    },
    presetGitMindSorted () {
      return this.sortPreset(this.presetGitMind, this.localConfig.presetGitMindLast)
    },
  },
  watch: {
    'localConfig.fieldFavicon' (url) {
      if (url === '') {
        return false
      }

      if (this.localConfig.iconHistory.indexOf(url) === -1) {
        this.localConfig.iconHistory.unshift(url)

        if (this.localConfig.iconHistory.length > 20) {
          this.localConfig.iconHistory = this.localConfig.iconHistory.slice(0, 20)
        }
      }
      else {
        this.localConfig.iconHistory = this.localConfig.iconHistory.filter(item => item !== url)
        this.localConfig.iconHistory.unshift(url)
      }
    }
  },
  mounted () {
    this.config.inited = true
    $('.tabular.menu .item').tab()
  },
  methods: {
    copyFieldOutput () {
      this.utils.ClipboardUtils.copyPlainString(this.fieldOutput)
    },
    sortPreset (list, first) {
      list = list.join(',').split(',')
      if (list.indexOf(first) > -1) {
        list.sort(function(x,y){ return x == first ? -1 : y == first ? 1 : 0; });
      }
      return list
    },
    setPresetLink (item, link) {
      this.localConfig.lastPreset = item
      this.localConfig[item + 'Last'] = link
      this.localConfig.fieldFavicon = link

      let prefix = 'z' + this.getCurrentMMDD() + ' '
      let title = this.localConfig.fieldTitle

      if (title.startsWith(prefix)) {
        return true
      }
      if (title[4] !== ' ') {
        this.localConfig.fieldTitle = prefix + title.trim()
      }
      else if (title[4] === ' ' && isNaN(title.slice(0, 4)) === false) {
        title = title.slice(5).trim()
        this.localConfig.fieldTitle = prefix + title.trim()
      }

    },
    getCurrentMMDD() {
      let d = new Date()
      let month = '' + (d.getMonth() + 1)
      let day = '' + d.getDate()
  
      if (month.length < 2) 
          month = '0' + month;
      if (day.length < 2) 
          day = '0' + day;
  
      return [month, day].join('');
    },
    checkFaviconRatio () {
      let img = this.$refs.faviconPreview
      //console.log(img.width, img.height)
      this.faviconRationCorrect = (img.width === img.height)
    }
  }
}

export default Index