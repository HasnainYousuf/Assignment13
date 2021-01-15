//CHANGING CASE

//Q 1
// var inp = prompt("Enter Your Name : ");
// var res = inp.toUpperCase();
// document.write(res);

//Q 2
// var inp = prompt("Enter Your Name : ");
// var res = inp.toLowerCase();
// document.write(res);

//Strings: measuring length and extracting parts

//Q 1
// var inp = prompt("Enter Your Favourite Mobile Model : ");
// document.write("The lenght of the string is " + inp.length);

//Q2
// var inp = prompt("Enter Your Favourite Mobile Model : ");
// var chr = inp.slice(inp.length-1,inp.length);
// document.write("Last Character is " + chr);

//Strings: finding segments

//Q1
// var inp = "Pakistan";
// document.write("Index is " + inp.indexOf("n"));

//Q 2
// var inp = prompt("Enter a username : ");
// for (var i=0;i<inp.length;i++)
// {
// if (inp[i] === '@' || inp[i] === ',' || inp[i] === '!')
// {
//     inp = prompt("Enter a valid username : ");
// }
// }
// alert("Valid Username");

//Q3
// var inp = "The quick brown fox jumps over the lazy the dog";
// var count = 0;
// for (var i =0;i<inp.length;i++)
// {
//     if ((inp[i] === 'T' && inp[i+1] === 'h' && inp[i+2] === 'e' ) || (inp[i] === "t" && inp[i] === 'h' && inp[i] === 'e' ))
//     {
//         count++;
//         i = i+3;
//     }
// }
// document.write(count);

//Strings: finding a character at a location

//Q1
// var a = "PAKISTAN";
// var b = a.charAt(3);
// document.write("The third index is " + b);

//Strings: replacing characters

//Q1
// var a = "HYDERABAD";
// a = a.replace("HYDER","ISLAM");
// document.write("The updated value is " + a);

//Q2
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// message = message.replace(/and/g , "&");
// document.write(message);

//Rounding numbers

//Q1
// var no = prompt("Enter a positive no = ");
// document.write("The number is " + no + "<br>");
// if (no >= 0)
// {
//     a = Math.round(no);
//     document.write("The rounded off value is " + a + "<br>");
//     b   = Math.ceil(no);
//     document.write("The ceil value is " + b + "<br>");
//     c = Math.floor(no);
//     document.write("The floor value is " + c + "<br>");

// }
// else
// alert("Invalid Input");

//Q2
// var no = prompt("Enter a negative no = ");
// document.write("The number is " + no + "<br>");
// if (no <= 0)
// {
//     a = Math.round(no);
//     document.write("The rounded off value is " + a + "<br>");
//     b   = Math.ceil(no);
//     document.write("The ceil value is " + b + "<br>");
//     c = Math.floor(no);
//     document.write("The floor value is " + c + "<br>");

// }
// else
// alert("Invalid Input");

//Generating random numbers

//Q1
// document.write("Dice value is " + Math.round(((Math.random()*5)+1)));

//Q2
// var toss =  Math.round(((Math.random()*1)+1));
// if (toss === 1)
// {
//     document.write("It's a Heads");
// }
// else 
// document.write("It's a Tails");

//Q3
// var no = prompt("Enter a number in the range of 1 to 10 = ");
// var no1 =  Math.round(((Math.random()*9)+1));
// if (no === no1)
// {
//     alert("CONGRATULATIONS ! Your guess is correct");
// }
// else
// {
//     alert("SORRY ! Wrong Answer");
// }

//Converting strings to integers and decimals

//Q1
// var weight = prompt("Enter your weight = ");
// var weight1 = parseFloat(weight);
// document.write(weight1);

//Converting strings to numbers, numbers to strings

//Q1
// var no = "472";
// var no1 = Number(no);
// document.write("The value is " + no + " and type is " + typeof(no) + "<br>");
// document.write("The value is " + no1 + " and type is " + typeof(no1));

//Q2
// var no = 35.36;
// var str = no.toString();
// var a,b;
// for (var i = 0;i<str.length;i++)
// {
//     if (str[i] === '.')
//     {
//         a = str.slice(0,i)
//         b = str.slice(i+1,str.length);
//     }
// }
// document.write(a + b);

//Controlling the length of decimals

//Q1
// var percentage = 30 / 45 * 100;
// var no = percentage.toFixed(2);
// document.write(no);