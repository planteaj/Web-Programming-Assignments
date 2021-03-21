var l = parseInt(prompt("Please input the length of the object"));
var w = parseInt(prompt("Please input the width of the object"));

var a = l * w;
var p = l+l+w+w;

var s1 = "Length = " + l;
var s2 = "Width = " + w;
var s3 = "Area = " + a;
var s4 = "Perimeter = " + p;
document.write("<h1>The Area and Perimeter App</h1>");
document.write(s1);
document.write("<br>");
document.write(s2);
document.write("<br>");
document.write("<br>");
document.writeln(s3);
document.write("<br>");
document.writeln(s4);
document.write("<br>");
document.write("<br>");

document.write("Thanks for using the Area and Perimeter application!");