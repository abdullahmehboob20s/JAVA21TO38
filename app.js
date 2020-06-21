// chapter 21 to 25 = STRING METHODS
// ----------------------------------------------------------------------------------

// task 1

var firstname = prompt("enter your first name")
var lastname = prompt("enter your last name")
alert("welcome to my website " + firstname+ " " + lastname)

// task 2

var mobail = prompt("enter the name of your favourite mobail modal")
document.write("your favourite mobail modal is : " + mobail + "<br>" + "length of the string is : " + mobail.length)

// task 3

var country = "paskitan"
var coun = country.indexOf("n")
alert(coun)

// task 4

var hello = "hello world"
var hell = hello.lastIndexOf("l")
document.write("String : " + hello + "<br>" + "last index of 'l' is : " + hell)

// task 5

var cntry = "Paskistani"
var cntry1 = cntry.charAt(3)
document.write("string : " + cntry + "<br>" + "character at index 3 is : " + cntry1)

// task 6

var array =  prompt( "enter your first name " )
var arr1 = array.concat(prompt( " enter your last name " ))
alert("welcome " + arr1)

// task 7

var city = "Hyderabad"
var clice = city.slice(5,10)
var islam = "Islam" + clice
alert(islam)

// task 8

var message = "Ali and Sami are best friends. They play cricket and football together."
var replace = message.replace(/and/g,"&")
alert(replace)

// task 9



// task 10

var inp = prompt("enter a fruit a name to capitilaize it")
inp = inp.toUpperCase()
alert(inp)

// task 11

var inp1 = prompt("enter your name to capitilaize it")
var fletter = inp1.slice(0,1)
var fcapital = fletter.toUpperCase()
var sletter = inp1.slice(1,100)
var scapital = sletter.toLowerCase()
var final = fcapital+scapital
document.write("User Input : " + inp1 + "<br>" + "Tital Case : " + final)

// task 12



// task 13

var username = prompt("enter your username")
var use = username.charCodeAt()
if(use >= 33 || use <= 64 ){
    alert("enter a valid username")
}
else{
    alert( "welcome " + username)
}
    

// task 14


var A = ["cake","apple pie","cookie","chips","patties"]
var b = prompt("enter sir/mam what do you want ?","cake, apple pie, cookie, chips, patties")
b = b.toLowerCase()
for (var i = 0; i <= A.length; i++){
    if(A[i] === b){
        alert(b + " has found ")
        
    }
    else{
        alert(b + " not found")
        
    }
}


// task 15


var password = prompt("enter a password")
var pass = password.charCodeAt()
var pass1 = password.charAt(0)
// alert(pass1)
if(pass >= 32 & pass <=122 ){
    alert("correct password")
}
else if(pass1 > 0){
    alert("password canot begin with the number")
}
else{
    alert("enter a valid password")
}

// task 16

var string = "University Of Karachi"
string = string.split("")
// alert(s)
for (var f = 0; f < string.length; f++){
    document.write(string[f] + "<br>")
}

// task 17

var pak = "pakistan"
var pak0 = pak.slice(7,8)
document.write("user input : " + pak + "<br>" + "last character of input is : " + pak0)

// task 18




// chapters26-30 (1) MATH METHODS
// --------------------------------------------------------------------------------------

// task 1

var n1 = +prompt("enter random number")
var n2 = Math.round(n1)
var n3 = Math.floor(n1)
var n4 = Math.ceil(n1)
document.write("number : " + n1 + "<br>" + "round off value : " + n2 + "<br>" + "floor value : " + n3 + "<br>" + "ciel value : " + n4)

// task 2

var n1 = +prompt("enter random number")
var n2 = Math.round(n1)
var n3 = Math.floor(n1)
var n4 = Math.ceil(n1)
document.write("number : " + n1 + "<br>" + "round off value : " + n2 + "<br>" + "floor value : " + n3 + "<br>" + "ciel value : " + n4)


// task 4

var dice0 = Math.random() * 50
var dice1 = Math.floor(dice0)
var dicesum = dice1 + 2
alert("random value : " + dice1 + "\nrandom dice value : " + dicesum)



// task 5

var no = Math.random() * 2
var fl = Math.floor(no)
if(fl === 1){
    alert(fl + "\n random coin value : " + "Heads")
}
else if(fl === 0){
    alert(fl + "\n random coin value : " + "Tails")
}


// task 6

var rannu = Math.random() * 100
var floor = Math.floor(rannu)
alert("random number between 1 and 100 is : " + floor)


// task 7

var how = +prompt("enter your weight","50 t0 60")
alert("the weight of the user is : " + how + " kilogram")

// task 8


var snum = +prompt("enter a number between 1 t0 10 ")
var snumber = 5;
if(snum <= 0 || snum >= 11){
    alert("enter any number between 1 to 10 ")
}
else if(snum === 5){
    alert("Hurray ! You Have Found Number ")
}
else if(snum >= 1 && snum <= 4){
    alert("You Are Close To The Correct Answer")
}
else if(snum >= 6 && snum <= 10){
    alert("You Are Close To The Correct Answer")
}
else{
    alert("Error \nEnter A Number")
}



// chapters31-34 (1) DATE METHODS
// ============================================================================================

// task 1

var date = new Date()
alert(date)

task 2


var newdate12 = new Date()
var month = newdate12.getMonth()
if(month === 0){
    alert("current month is : january")
}
else if(month === 1){
    alert("current month is : feburary")
}
else if(month === 2){
    alert("current month is : March")
}
else if(month === 3){
    alert("current month is : April")
}
else if(month === 4){
    alert("current month is : May")
}
else if(month === 5){
    alert("current month is : June")
}
else if(month === 6){
    alert("current month is : Julay")
}
else if(month === 7){
    alert("current month is : Agust")
}
else if(month === 8){
    alert("current month is : September")
}
else if(month === 9){
    alert("current month is : November")
}
else if(month === 10){
    alert("current month is : October")
}
else if(month === 11){
    alert("current month is : December")
}
else{
    alert("Error")
}

// task 3


var newdate1 = new Date()
var day = newdate1.getDay()
if(day === 0){
    alert("Today Is Sunday")
}
else if(day === 1){
    alert("Today Is Monday")
}
else if(day === 2){
    alert("Today Is Tuesday")
}
else if(day === 3){
    alert("Today Is Wednesday")
}
else if(day === 4){
    alert("Today Is Thursday")
}
else if(day === 5){
    alert("Today Is Friday")
}
else if(day === 6){
    alert("Today Is Saturday")
}


// task 4


var dy = "sunday"
if(dy === "sunday" || dy === "saturday" ){
    alert("its fun day")
}


// task 5

var newdate = new Date()
var datenew = newdate.getDate()
if(datenew >= 1 && datenew <= 15){
    alert("First Fifteen Days Of The Month")
}
else if(datenew >= 16 && datenew <= 31){
    alert("Last Days Of The Month")
}

// task 6


var newdate23 = new Date("january 1 , 1970" )
var nw = newdate23.getTime()
var nw2 = newdate23.getMinutes()
document.write("Current Date : " + newdate23 + "<br>" + "Elapsed Milliseconds Since January 1 ,1970 : " + nw + "<br>" + "Elapsed Minutes Since January 1 ,1970 : " + nw2)


// task 7

var ampm = prompt("Enter Whether Its Before Noon Or After Noon","Before Noon Or After Noon")
ampm = ampm.toLowerCase()
if(ampm === "before noon"){
    alert("Its PM")
}
else if(ampm === "after noon"){
    alert("Its AM")
}
else {
    alert("Error You Made A Mistake")
}


// task 8

var laterday = new Date("Dec 31, 2020")
alert("Later Day : " + laterday )


// task 9


var newdate = new Date(" June 18, 2015")
var newdatemili = newdate.getTime()
var today = new Date()
var todaymili = today.getTime()
var diff = todaymili - newdatemili;
var days = 1000 * 60 * 60 * 24 ;
var fin = Math.floor(diff / days); 
alert(fin + " days have passed since 1st ramadan,2015")


// task 10

var refdate = new Date("dec 5,2015,22:50:16")
var refdatemilli = refdate.getTime()
var toddate = new Date()
var toddatemili = toddate.getTime()
var deff123 = toddatemili-refdatemilli;
var sceonds = 1000 
var comp = Math.floor(deff123/sceonds);
document.write("reffrence date : " + refdate + "<br>" + comp + " seconds has passed since the begining of 2015")


// task 11


var nwdate = new Date()
var min = nwdate.setHours(1)
alert(min)













// Chapter 25-38 (1) Function
// =======================================================================================


// task 1


function greeting(a){
    var z = a
    return z;
}
var g = greeting(new Date())
alert(g)



// task 2


function names(fname,lname){
    var b = fname + " " + lname
    return b;
}
var c = names(prompt("enter your first name"),prompt("enter your last name"))
alert(c)


// task 3


function sum(num1,num2){
    var n1 = num1+num2
    return n1;
}
var sm = sum(+prompt("enter first number"),+prompt("enter second number"))
alert(sm)


// task 4

var num1 = +prompt("enter a first number you want calculate")
var oper = prompt("enter a operator","+ , - , * , /")
var num2 = +prompt("enter a second number you want calculate")

function sum(a,b){
    var result = a + b
    alert("sum of " + num1 + " and " + num2 + " is : " + result )
}
function multiply(a,b){
    var result = a * b
    alert("multiplication of " + num1 + " and " + num2 + " is : " + result )
}
function divide(a,b){
    var result = a / b
    alert("divition of " + num1 + " and " + num2 + " is : " + result )
}
function subtract(a,b){
    var result = a - b
    alert("subtraction of " + num1 + " and " + num2 + " is : " + result )
}
if(oper === "+"){
    sum(num1,num2)
}
else if(oper === "*"){
    multiply(num1,num2)
}
else if(oper === "/"){
    divide(num1,num2)
}
else if(oper === "-"){
    subtract(num1,num2)
}
else{
    alert("invalid operator !!")
}


// task 5

function squares(one,two){
    var f = one+two;
    return f;
}
var h = squares(30,50)
alert(h)


// task 6
// samaj nhi aya


// task 7
// Sir nhi horha problem arhi he ab krwa diga ( Help Desk ) men


// task 8

var Base = +prompt("enter a base")
var Perpendicular = +prompt("enter a Perpendicular")

function calhu(base,perpendicular){
    var calculate = base + perpendicular
    function inner(calculate){
        var cal2 = calculate*2
    }
}
var g = calhu(Base,Perpendicular)
alert(g)

// task 9

var ent = +prompt("enter a width to calculate the area of rectangle")
var ent1 = +prompt("enter a heigth to calculate the area of rectangle")

function result(x,y){
    var s = x*y
    alert(s)
}

var c = result(ent,ent1)
alert(c)



// task 10

function ispalindrome(str){
    var reversed = ""

    for(var char of str){
        reversed = char + reversed;
    }
    return reversed === str;
}
alert(ispalindrome("dad"))



// task 11


function titlecase(str){
    var arr = str.toLowerCase().split(" ");
    var result = arr.map(
        function(val){
            return val.replace(val.charAt(0), val.charAt(0).toUpperCase())
        });

    return result.join(" ")
}

alert (titlecase(" the quick brown fox "))
