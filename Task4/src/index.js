const express = require("express");
const path = require("path");
const User = require("./config");
const bcrypt = require('bcrypt');

const app = express();
app.use(express.static(__dirname +'public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");


app.get('/public/css/styles.css', (req, res) => {
    const cssFilePath = path.join(__dirname, 'public', 'css', 'styles.css');
    res.type('text/css');
    res.sendFile(cssFilePath);
});

app.get('/public/js/form.js', (req, res) => {
    const jsFilePath = path.join(__dirname, 'public','js', 'form.js');
    res.type('application/javascript');
    res.sendFile(jsFilePath);
});


app.get("/", (req, res) => {
    res.render("main");
});

app.get("/Signin", (req, res) => {
    res.render("main");
});

app.get("/Login", (req, res) => {
    res.render("main");
});

// Register User
app.post("/Signin", async (req, res) => {

    const  data =  {
        name: req.body.email,
        password: req.body.password,
        ReTypePassword: req.body.ReTypePassword,
        firstName: req.body.FirstName,
        lastName: req.body.LastName,
        gender:req.body.Gender
    }

    if (data.password !== data.ReTypePassword) {
        return res.send('Password and Retype Password do not match.');
    }
    else{   
        const existingUser = await User.findOne({ name:data.name });
        // Check if the Email already exists in the database
        if (existingUser) {
            res.send('User already exists. Please choose a different Email.');
        } 
        else{
            // Hash the password using bcrypt
            const saltRounds = 10; 
            const hashedPassword = await bcrypt.hash(data.password, saltRounds);

            data.password = hashedPassword;
            const newUser = new User(data);


            await newUser.save();
            console.log('User registered:', newUser);
            res.send('User registered successfully.');
        }    
    }

});

    


    

// Login user 
app.post("/Login", async (req, res) => {
    try {
        const check = await User.findOne({name:req.body.email});
        if (!check) {
            res.send("User name cannot found")
        }
        else{
            // Compare the hashed password from the database with the plaintext password
            const isPasswordMatch = await bcrypt.compare(req.body.password, check.password);
            if (!isPasswordMatch) {
                res.send("wrong Password");
            }
            else {
                res.render("home");
            }
        }
    }   
            
    catch {
        res.send("wrong Details");
    }
});


// Define Port for Application
const port = 5000;
app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`)
});