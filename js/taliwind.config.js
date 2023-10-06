tailwind.config = {
    theme: {
      extend: {
        colors: {
          navbg: '#0D0D0D',
          white: '#FFF',
          primary: '#FFD2A4',
          btntext: '#1C1D28',
          subheading: '#161722',
          serviceitembg: '#FFF5EB',
          watchbg:'#F5F2F0',
        },
        maxWidth: {
            'container': '1280px',
          },
          fontFamily: {
            robotoondensed: " Roboto Condensed, sans-serif",
            roboto: " Roboto, sans-serif",
            
          },
          backgroundImage: {
            'banner': "url('./images/banner.jpg')",
            bgoverlay: 'linear-gradient(40deg, #060606 16.68%, rgba(0, 0, 0, 0.02) 96.44%);',
            textgradiant:"linear-gradient(110deg, #A54E2B -53.83%, #DC9853 62.61%);",
            visitbg: "url('./images/visitbg.jpg')"
          },
          fontSize: {
            bannerheading: '64px',
          }
      }
    }
  }