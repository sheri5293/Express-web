const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');

const port = process.env.PORT || 3000;

//! public static path

const static_path = path.join(__dirname, '../public');
const template_path = path.join(__dirname, '../templates/views');
const partials_path = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set('views', template_path);

hbs.registerPartials(partials_path);

app.use(express.static(static_path));



//!routing

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/home", (req, res) => {
    res.render("index");
});



app.get("/about", (req, res) => {
    res.render("about",{
        WebName:"Sheheryar",
    });
});


app.get('/about/*',(req, res)=>{
    res.render('404error',{
        errorMsg:"Page of about not found",
    });
});

app.get("*", (req, res) => {
    res.render('404error', {
        errorMsg: 'ops! page not found',
    });
});


app.listen(port, () => {
    console.log(`Server is running on port at ${port}`);
});