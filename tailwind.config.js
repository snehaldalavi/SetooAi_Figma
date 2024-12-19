module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
       fontFamily : {
        sans : ['Plus Jakarta Sans' , 'sans-serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
       },
        boxShadow :{
          'md' : '0px 4px 16px 0px rgba(239, 84, 73, 0.10)'
        },
        gridTemplateColumns: {
          
          'custom': '327px auto',
        },
        fill : {
          'white' : '#ffffff',
        },
    },
    
  },
varients : {
  fill : ['hover','focus'],
},

  plugins: [],
}
