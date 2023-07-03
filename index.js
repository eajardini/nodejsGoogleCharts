// ** database **
// https://blog.logrocket.com/crud-rest-api-node-js-express-postgresql/
// https://www.luiztools.com.br/post/tutorial-de-crud-com-node-js-sequelize-e-postgresql/

// ** ejs**
// https://ejs.co/
//https://blog.logrocket.com/how-to-use-ejs-template-node-js-application/

// ** MVC **
// https://www.codecademy.com/article/mvc-architecture-for-full-stack-app



const express = require('express')


const app = express()
const port = 3000

app.set('view engine', 'ejs')




app.get('/', (req, res) => (async() => {
  let user = [
  {"browser":'Firefox', "Porcentage":45.},
  {"browser":'IE',      "Porcentage":26.8},
  {"browser":'Chrome',  "Porcentage":12.8},
  {"browser":'Safari',  "Porcentage":8.5},
  {"browser":'Opera',   "Porcentage":6.2},
  {"browser":'Others',  "Porcentage":0.},
  ];

  //console.log("quantidade de rows:", user.length);  
  res.render('pages/charts', { "user": user })
})());


app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})