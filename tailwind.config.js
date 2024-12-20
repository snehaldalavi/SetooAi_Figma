module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
       fontFamily : {
        sans : ['Plus Jakarta Sans' , 'sans-serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
       },
        boxShadow :{
          'md' : '0px 4px 16px 0px rgba(239, 84, 73, 0.10)',
          'gray' : '0px 4px 4px rgba(0, 0, 0, 0.25)',
        },
        gridTemplateColumns: {
          
          'custom': '327px auto',
          'custom1' : '90.997px auto',
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
