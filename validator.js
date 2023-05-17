/*
    Validator is an npm module that can validate a variety of different formats as well as sanitize inputs. 
    It can even evaluate password strength. 
*/

var validator = require("validator");

const email = "riley.ledrew+123@keyin.com";

// In this snippet, we can see that simply passing the boolean method; .isEmail() will return a true or false if an email is valid.

if (validator.isEmail(email)) {
  console.log(`${email} is a valid email`);
} else {
  console.log(`${email} is not a valid email`);
}

const url = "https://keyin,com";

// In this snippet, much like with emails, the module will simply return a boolean based on the validity of the URL.

if (validator.isURL(url)) {
  console.log(`${url} is a valid URL`);
} else {
  console.log(`${url} is not a valid URL`);
}

const goodpass = "Meb!9yziD#*abp%QFk6sKpUakq4C9UCYFxGbpPhjxxDf5vLk";
const badpass = "code4lyfe";

// Using factors like password length, character variety, and use of capitalization, the module will return a boolean whether the password is strong or not.

if (validator.isStrongPassword(goodpass)) {
  console.log(`${goodpass} is a strong password`);
} else {
  console.log(`${goodpass} is not a strong password`);
}
if (validator.isStrongPassword(badpass)) {
  console.log(`${badpass} is a strong password`);
} else {
  console.log(`${badpass} is not a strong password`);
}
