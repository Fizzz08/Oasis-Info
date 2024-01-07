"use strict";

var express = require("express");

var path = require("path");

var User = require("./config");

var bcrypt = require('bcrypt');

var app = express();
app.use(express["static"](__dirname + 'public'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.set("view engine", "ejs");
app.get('/public/css/styles.css', function (req, res) {
  var cssFilePath = path.join(__dirname, 'public', 'css', 'styles.css');
  res.type('text/css');
  res.sendFile(cssFilePath);
});
app.get('/public/js/form.js', function (req, res) {
  var jsFilePath = path.join(__dirname, 'public', 'js', 'form.js');
  res.type('application/javascript');
  res.sendFile(jsFilePath);
});
app.get("/", function (req, res) {
  res.render("main");
});
app.get("/Signin", function (req, res) {
  res.render("main");
});
app.get("/Login", function (req, res) {
  res.render("main");
}); // Register User

app.post("/Signin", function _callee(req, res) {
  var data, existingUser, saltRounds, hashedPassword, newUser;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          data = {
            name: req.body.email,
            password: req.body.password,
            ReTypePassword: req.body.ReTypePassword,
            firstName: req.body.FirstName,
            lastName: req.body.LastName,
            gender: req.body.Gender
          };

          if (!(data.password !== data.ReTypePassword)) {
            _context.next = 5;
            break;
          }

          return _context.abrupt("return", res.send('Password and Retype Password do not match.'));

        case 5:
          _context.next = 7;
          return regeneratorRuntime.awrap(User.findOne({
            name: data.name
          }));

        case 7:
          existingUser = _context.sent;

          if (!existingUser) {
            _context.next = 12;
            break;
          }

          res.send('User already exists. Please choose a different Email.');
          _context.next = 22;
          break;

        case 12:
          // Hash the password using bcrypt
          saltRounds = 10;
          _context.next = 15;
          return regeneratorRuntime.awrap(bcrypt.hash(data.password, saltRounds));

        case 15:
          hashedPassword = _context.sent;
          data.password = hashedPassword;
          newUser = new User(data);
          _context.next = 20;
          return regeneratorRuntime.awrap(newUser.save());

        case 20:
          console.log('User registered:', newUser);
          res.send('User registered successfully.');

        case 22:
        case "end":
          return _context.stop();
      }
    }
  });
}); // Login user 

app.post("/Login", function _callee2(req, res) {
  var check, isPasswordMatch;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(User.findOne({
            name: req.body.email
          }));

        case 3:
          check = _context2.sent;

          if (check) {
            _context2.next = 8;
            break;
          }

          res.send("User name cannot found");
          _context2.next = 12;
          break;

        case 8:
          _context2.next = 10;
          return regeneratorRuntime.awrap(bcrypt.compare(req.body.password, check.password));

        case 10:
          isPasswordMatch = _context2.sent;

          if (!isPasswordMatch) {
            res.send("wrong Password");
          } else {
            res.render("home");
          }

        case 12:
          _context2.next = 17;
          break;

        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](0);
          res.send("wrong Details");

        case 17:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 14]]);
}); // Define Port for Application

var port = 5000;
app.listen(port, function () {
  console.log("Server listening on port http://localhost:".concat(port));
});
//# sourceMappingURL=index.dev.js.map
