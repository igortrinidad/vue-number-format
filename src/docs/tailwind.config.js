// tailwind.config.js
module.exports = {
  theme: {
      colors: {
          'black': '#352D2A',
          'white': '#FFFFFF',
          'purple': '#834CD8',
          'blue': '#0099F7',
          'blue-light': '#94BDEB',
          'blue-dark': '#3E426A',
          'blue-dark-hover': '#2F3250',
          'grey': '#9798AC',
          'grey-light': '#F1F3F4',
          'green': '#16B96E',
          'yellow' : '#F8D832',
          'smoke': 'rgba(78, 78, 78, 0.7)',
          'smoke-light': 'rgba(78, 78, 78, 0.3)',
          'red' : '#F7566F'
      },

      fontFamily: {
         'sans': ['Roboto', 'Gotham Rounded A', 'Gotham Rounded B', 'Segoe UI', 'Oxygen', 'Ubuntu', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
      },

      fontSize: {
          'xxs': '.7rem',     // 12px
          'xs': '.85rem',     // 12px
          'sm': '.95rem',    // 14px
          'base': '1rem',     // 16px
          'lg': '1.125rem',   // 18px
          'xl': '1.5rem',    // 20px
          '2xl': '2rem',    // 24px
          '3xl': '2.5rem',  // 30px
          '4xl': '3rem',   // 36px
          '5xl': '4rem',      // 48px
      },

      fontWeight: {
          'thin': 100,
          'normal': 200,
          'medium': 400,
          'bold': 700,
      },

      boxShadow: {
          sm: '2px 2px 6px 0px rgba(47, 49, 82, 0.15)',
          top: '-4px -4px 8px 0px rgba(47, 49, 82, 0.15)',
          default: '3px 3px 10px 0px rgba(47, 49, 82, 0.15)',
          md: '4px 4px 40px 0px rgba(47, 49, 82, 0.25)',
          lg: '4px 4px 60px 0px rgba(47, 49, 82, 0.35)',
          outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      },

      screens: {
          'sm': '576px',
          'md': '768px',
          'lg': '992px',
          'xl': '1200px',
      },

      width: {
          'auto': 'auto',
          'px': '1px',
          '1': '0.25rem',
          '2': '0.5rem',
          '3': '0.75rem',
          '4': '1rem',
          '5': '1.25rem',
          '6': '1.5rem',
          '8': '2rem',
          '10': '2.5rem',
          '12': '3rem',
          '16': '4rem',
          '20': '5rem',
          '24': '6rem',
          '32': '8rem',
          '48': '12rem',
          '52': '15rem',
          '64': '16rem',
          '1/2': '50%',
          '1/3': '33.33333%',
          '2/3': '66.66667%',
          '1/4': '25%',
          '3/4': '75%',
          '1/5': '20%',
          '2/5': '40%',
          '3/5': '60%',
          '4/5': '80%',
          '1/6': '16.66667%',
          '5/6': '83.33333%',
          'full': '100%',
          'screen': '100vw',
          'sidebar': '15rem'
        },


        height: {
          'auto': 'auto',
          'px': '1px',
          '1': '0.25rem',
          '2': '0.5rem',
          '3': '0.75rem',
          '4': '1rem',
          '5': '1.25rem',
          '6': '1.5rem',
          '8': '2rem',
          '10': '2.5rem',
          '12': '3rem',
          '13': '3.2rem',
          '14': '3.5rem',
          '16': '4rem',
          '20': '5rem',
          '24': '6rem',
          '32': '8rem',
          '48': '12rem',
          '64': '16rem',
          '99': '99vh',
          'full': '100%',
          '1/3': '33vh',
          '1/2': '50vh',
          '3/4': '75vh',
          'screen': '100vh',
        },

      maxWidth: {
          'xs': '20rem',
          'sm': '30rem',
          'md': '40rem',
          'lg': '50rem',
          'xl': '60rem',
          '1/4': '25%',
          '1/3': '33%',
          '1/2': '50%',
          '3/4': '75%',
          '8/10': '80%',
          '9/10': '90%',
          'full': '100%',
      },

      minWidth: {
          'xs': '20rem',
          'sm': '30rem',
          'md': '40rem',
          'lg': '50rem',
          'xl': '60rem',
          '1/4': '25%',
          '1/3': '33%',
          '1/2': '50%',
          '3/4': '75%',
          '8/10': '80%',
          '9/10': '90%',
          'full': '100%',
      },

      padding: {
          'px': '1px',
          '0': '0',
          '1': '0.25rem',
          '2': '0.5rem',
          '3': '0.75rem',
          '4': '1rem',
          '5': '1.25rem',
          '6': '1.5rem',
          '8': '2rem',
          '9': '2.25rem',
          '10': '2.5rem',
          '12': '3rem',
          '16': '4rem',
          '20': '5rem',
          '24': '6rem',
          '32': '8rem',
      },

      margin: {
          'auto': 'auto',
          'px': '1px',
          '0': '0',
          '1': '0.25rem',
          '2': '0.5rem',
          '3': '0.75rem',
          '4': '1rem',
          '5': '1.25rem',
          '6': '1.5rem',
          '8': '2rem',
          '10': '2.5rem',
          '12': '3rem',
          '13': '3.5rem',
          '16': '4rem',
          '20': '5rem',
          '24': '6rem',
          '32': '8rem',
          '40': '12rem',
          '-1': '-0.25rem',
          '-2': '-0.5rem',
          '-3': '-0.75rem',
          '-4': '-1rem',
          '-5': '-1.25rem',
          '-6': '-1.5rem',
          '-8': '-2rem',
          '-10': '-2.5rem',
          '-12': '-3rem',
          '-16': '-4rem',
          '-20': '-5rem',
          '-24': '-6rem',
          '-32': '-8rem',
      },

      borderRadius: {
          default: '4px',
          'none': '0',
          'lg': '10px',
          'full': '9999px',
      }
  },
  variants: {
      height: ['responsive'],
      padding: ['responsive', 'even'],
      maxWidth: ['responsive'],
      minWidth: ['responsive'],
      margin: ['responsive', 'even', 'odd', 'last'],
      borderColor: ['responsive', 'hover', 'focus', 'group-hover'],
      border: ['responsive', 'hover', 'focus', 'even'],
      backgroundColor: ['responsive', 'hover', 'active', 'focus', 'group-hover'],
      textColor: ['responsive', 'hover', 'focus', 'group-hover'],
      outline: ['responsive', 'focus', 'hover', 'active'],
      boxShadow: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  purge: false,
}
