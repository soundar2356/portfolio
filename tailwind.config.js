/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      borderColor :{
        'primary':'rgb(85 81 227)',
      'secondary' : '#2b2d77'
      }
    },
    fontFamily :{
     'Ubuntu-font': 'Ubuntu',
     'Lato-font': 'Lato',
     'Montserrat-font':'Montserrat',
     'OpenSans-font':'Open+Sans',
     'LeagueSpartan-font':'League+Spartan',
     'roboto-font': 'Roboto'
    }
  },
  plugins: [],
}

