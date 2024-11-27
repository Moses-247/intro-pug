import express from "express";

const app = express()

app.set("view engine", "pug");
app.set("views", "./views");

const PORT = 3000;
app.use(express.static('./views/style.css'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('login')
});

app.post('/login', (req,res) =>{    
    const {username,email,password} = req.body;
    console.log(req.body.email);
    console.log(req.body.password);
    if(req.body.email==="johndoe@gmail.com" && req.body.password==="123456John"){
     res.render('home')
    } 
    else{
        res.send('invalid password or email')
    }
});


app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
