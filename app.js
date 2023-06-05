// ---------------ASSAIGNMENT ARRAY 14 TO 16---------------
//  Q1. Declare an empty array using JS literal notation to store
// student names in future.

// var students = []

// Q2. Declare an empty array using JS object notation to store
// student names in future.

// var students = ()

// Q3. Declare and initialize a strings array.

// var arr =  ["Amna", "Laiba" , "Aliza" ,"Eman"]
// document.write("<h2>String Array:</h2>"  + arr)

// Q4. Declare and initialize a numbers array.

// var arr = [10,20,21,22,23]
// document.write("<h2>Numbers Array:</h2>" +arr)

// Q5. Declare and initialize a boolean array.

// var arr = [true , false]
// document.write("<h2>Boolean Array:</h2>" +arr)

// Q6. Declare and initialize a mixed array.
// var arr = ["Amna","pink", 20 , true,false, 10.4]
// document.write("<h2>Mixed Array:</h2>" +arr)


// Q7. Declare and Initialize an array and store available 
// education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
// BS, BCOM, MS, M. Phil., PhD). Show the listed 
// qualifications in your browser like:

// var qualifications =["SSC","HSC","BSC","BS","BCOM","MS","M.Phil.","phD"]

// document.write("<h1>Qualification:</h1>")
// document.write("<h2>1)SSC <br> 2)HSC <br>3)BSC   <br> 4)BS  <br> 5)BCOM  <br> 6)MS  <br> 7)M.Phil. <br> 8)phD</h2>")


// Q8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students. 
// Assume that total marks are 500 for each student, display 
// the scores & percentages of students like:

// var studentNames = ["Michael","Jhone","Tony"]
// var scores =[320,230, 480]
// var totalMarks = [500]
//  percentage1 =(scores[0]/ totalMarks ) *100;
//  percentage2 =(scores[1]/ totalMarks ) *100;
//  percentage3 =(scores[2]/ totalMarks ) *100;
// document.write("<h1>score of " + studentNames[0] + " is " + "[320] " +"percentage: " + percentage1 + "% </h2>")
// document.write("<h1>score of " + studentNames[1] + " is " + "[230] " +"percentage: " + percentage2 + "% </h2>")
// document.write("<h1>score of " + studentNames[2] + " is " + "[480] " +"percentage: " + percentage3 + "% </h2>")


// Q9. Initialize an array with color names. Display the array
// elements in your browser

// var color = ["Red", "Pink", "yellow" , "Blue"]
// document.write(color)

// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.

// var userColor = prompt("Enter a color")
// var colors = ["Red", "Pink", "yellow" , "Blue"]
// colors.unshift(userColor,colors)
// document.write( "updated Array:" + colors )


// b. Ask the user what color he/she wants to add to the end 
// & add that color to the end of the array. Display the 
// updated array in your browser.

// var userColor = prompt("Enter a color")
// var color = ["Red", "Pink", "yellow" , "Blue"]
// color.push(userColor,color)
// document.write( "updated Array:" + color)


// c. Add two more color to the beginning of the array. 
// Display the updated array in your browser.

// var color = ["Red", "Pink", "yellow" , "Blue"]
// color.unshift("white" ,"black","purple")
// console.log(color)

// d. Delete the first color in the array. Display the updated
// array in your browser.

// var color = ["Red", "Pink", "yellow" , "Blue"]
// color.shift()
// console.log(color)

// e. Delete the last color in the array. Display the updated
// array in your browser

// var color = ["Red", "Pink", "yellow" , "Blue"]
// color.pop()
// console.log(color)

// f. Ask the user at which index he/she wants to add a color 
// & color name. Then add the color to desired 
// position/index. . Display the updated array in your 
// browser.


// var colors = ["Red","Green","yellow","pink"]
// var index = +prompt("Enter the index where you want to add a color")
// var color = prompt("Enter a color name")

// colors.splice(index,0,color) 
// document.write("updated Array:" + colors + "<br>") 


// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// var colors=["red", "green", "blue", "yellow"]
// var index = prompt("At which index  you want to delet the color:" )
// var deletcolors = +prompt("how many colors do you want to delet")
// colors .splice(index,deletcolors)
// document.write("updated array :" + colors + "<br>")

// Q10. Write a program to store student scores in an array & 
// sort the array in ascending order using Array’s sort 
// method.

// var score = [320,230,480,120]
// document.write("<h2>Scores of students: 320,230,480,120</h2>" )

// var OrderedScoresOfStudents = ["[3]+","+ score[1] +"," +score[0]+ "," + score[2]" +"<br>"]
// Document.write("<h2>Ordered Scores Of Students:</h2>" + "<h2> 120,230,320,480</h2>")

// Q11. Write a program to initialize an array with city names. 
// Copy 3 array elements from cities array to selectedCities 
// array.
// var cities = ["Karachi", "Lahore", "Islamabad","Quetta" , "Peshawar"] 
// document.write("<h2>Cities List:<br> Karachi,Lahore,Islamabad,Quetta,Peshawar</h2>"  )
// var copyCities = cities.slice(2,4)
// document.write("<h2>Selected Cities List:<br>Islamabad,Quetta</h2>")


// Q12. Write a program to create a single string from the 
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// var arr = [ "This"," is","my", "cat" ]
// document.write("<h2>Array:</h2>")
// document.write(arr)
// var string = arr.join(" ")
// document.write("<h2>string:</h2>"  )
// document.write(string)

// Q13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they 
// were stored. (FIFO-First In First Out)


//  var devices = ['keyboard', 'mouse', 'printer', 'monitor'];
// var out;
// document.write('Devices :' +devices+ '<br>');
// out = devices.shift();
// document.write('Out' + '<br>' + out + '<br>')

// out = devices.shift();
// document.write('Out' + '<br>' + out + '<br>')
// out = devices.shift();
// document.write('Out' + '<br>' + out + '<br>')
// out = devices.shift();
// document.write('Out' + '<br>' + out + '<br>')

// Q14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out) // Create a new empty array 

// var devices =['monitor','printer', 'mouse','keyboard']
// var out;
// document.write('Devices :' +devices+ '<br>');
// out = devices.shift();
// document.write('Out' + '<br>' + out + '<br>')

// out = devices.shift();
// document.write('Out' + '<br>' + out + '<br>')
// out = devices.shift();
// document.write('Out' + '<br>' + out + '<br>')
// out = devices.shift();
// document.write('Out' + '<br>' + out + '<br>')

// Q15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array. 
//     Display the following dropdown/select menu in your 
//     browser using document.write() method:



// var phoneMenu = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// var index = 0;
// document.write("<select>")
// document.write("<option>" + phoneMenu[index++] + "<option>")
// document.write("<option>" + phoneMenu[index++] + "<option>")
// document.write("<option>" + phoneMenu[index++] + "<option>")
// document.write("<option>" + phoneMenu[index++] + "<option>")
// document.write("<option>" + phoneMenu[index++] + "<option>")
// document.write("<option>" + phoneMenu[index++] + "<option>")
// document.write("<select>")





