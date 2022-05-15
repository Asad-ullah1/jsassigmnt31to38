
         // Question 1
 /*
       var now = new Date();
       document.write(now);
*/

         // Question 2

   /*      
         var monthNames = ["Januray", "feburay", "March", "April", "May", "June", "July","August", "September", "October", "November","December"];
           var now = new Date();
           var allMonth = now.getMonth();
           var nameOfMonths = monthNames[allMonth];
         
           document.write("Current Month: " + nameOfMonths);
   */      
         
         // Question 3
         
    /*     
       var now = new Date();
       document.write(now.toString().slice(0, 3));
     */
         // Question 4
     /*
         var currentDate = new Date();
         currentDate.toString;
         var b = currentDate.toString();
         var c = b.slice(0,3);
         if (c === "Sat"){
             document.write("It's Fun Day")
         }else if(c === "Sun"){
             document.write("It's Fun Day")
         }else if(c === "Mon"){
             document.write()
         }else if(c === "Tue"){
             document.write()
         }else if(c === "Wed"){
             document.write()
         }else if(c === "Thr"){
             document.write()
         }else if(c === "Fri"){
             document.write()
         }
         */
         // Question 5
         /*
          var now  = new Date().getDate();
         console.log(now)
         if(now <= 15 ){
                 alert("First Fifteen Days of th Month")
         }else{
             alert("Last days of the month")
        }
        */


        // Question 6
        /*
        var now  = new Date( "Dec 5 2015 22:32:23")
        var milis = now.getTime()
        var min = now / (1000 * 60*60);
        document.write("current date : " + now + " <br>" +"Elapsed milisec since january 1,1970 :"+ milis + "<br>" +"Elapsed minutes since january 1,1970 :"+ min)
         
        */
                 // Question 7
         
       /*
     var d = new Date();
     var currentHrs = d.getHours();
   
     if(currentHrs=== 12 || currentHrs=== 12|| currentHrs=== 13|| currentHrs=== 14|| currentHrs=== 15|| currentHrs=== 16|| currentHrs== 17|| currentHrs=== 18|| currentHrs=== 19|| currentHrs=== 20|| currentHrs=== 21|| currentHrs=== 22|| currentHrs=== 23|| currentHrs=== 24){
        document.write("its pm")
     }
     else if(currentHrs===1||currentHrs===2||currentHrs===3||currentHrs===4||currentHrs===5||currentHrs===6||currentHrs===7||currentHrs===8||currentHrs===9||currentHrs===10||currentHrs===11){
        document.write("its am")
    }
 */

                   // Question 8
                   /*
     var now = new Date("31 dec 2020");    
     document.write(now);
*/

 
                   // Question 9
           /*

          var today = new Date();
          var pastDate = new Date("June 18 2015");
          var msToday =today.getTime();
          var mspast = pastDate.getTime();
          var msDiff =  msToday - mspast ;
          var diff = msDiff / (1000 * 60 * 60 * 24);
         document.write(Math.ceil(diff)  + "  days passed since 1st Ramadan 2015")
        
        */
        
                         // Question 10
        /*
         var today = new Date("Januray 1  2015");
         var futureDate = new Date("December 5 2015 22:50:16");
         var msToday = today.getTime();
         var msFuture = futureDate.getTime();
         var msDiff = msFuture - msToday;
         var diff = msDiff / (1000 * 60  );
          document.write( "On reference Date  " + futureDate + Math.ceil(diff) + "    Seconds had passed Since beginning of 2015" )
        */
                    // Question 11
            /*        
           var today = new Date("December 5 2015 23:08:16");
           var currentTime= new Date("December 5 2015 22:08:16");
           var msToday = today.getTime();
           var msFuture = currentTime.getTime();
           var msDiff =  msToday-currentTime;
           var diff = msDiff / (1000 * 60 *60 );
            document.write(" Current date is :"+ today +Math.ceil(diff)+  "  hour ago it was  "+ currentTime);
          */
                  // Question 12
          
          /*
           var now = new Date()
           var year = new Date()
           year.setFullYear(1915)
           document.write("Today :"+now +"\n 100 years Back :"+ year)
           console.log(year)
          */
                   //Question 13
            /*       
           var age = +prompt("Your age ?");
           var now = new Date().getFullYear()
          
           var ageCalc = now - age
          
           document.write("Your Age is "+age +" <br> Your Birth Year is:"+ageCalc )
           */

            //Question 14
        /*
             var dated = new Date();
             var month = dated.getMonth();
             var ConsumerName = "ABC"
             var unitNum = 410;
             var chargesPerUnit = 16;
             var netAmount = unitNum * chargesPerUnit;  
             var lateCharges = 350 ; 
             var grossAmount = netAmount + lateCharges;
             document.write("<b>K - ELECTRIC BILL </b> <br />" + " Customer Name : "+ ConsumerName + "<br />" + " Month  " + month + "<br />" + "Number of Units "+ unitNum + "<br />" + "Charges per Unit" + chargesPerUnit+ "<br />"+ "<br />" + "<br />" + "   Net Amount : (With in due Date: )"+ netAmount  + "<br />" + " Late Charges :" + lateCharges + "<br />" + "  Groos Amount : "+ grossAmount  )
         */

            //chapter 35 t0 38


               //Question 1
           /*    
            function foo(){
             
            var rightNow = new Date();
            document.write(rightNow);           
            }
            foo();
            */


               //Question 2

      /*
       function greet() {
         var firstName = "Junaid";
         var lastName = "Khan";
         var fullName = firstName + " " + lastName;
         alert("Hello "+fullName);
       }
       greet();
      */
               //Question 3
         /*
       var num1 = parseInt(prompt("Enter Number 1"));
       var num2 = parseInt(prompt("Enter Number 2"));

       function add(){
               return num1 + num2
       }
       var sum = add()
       document.write(sum)
    */
                //Question 4

/*
          function calc(num1 , opt , num2 ){
                      if(opt === "+"){
                          return num1 + num2 
                      }
                      else if(opt === "-"){
                          return num1  - num2 
                      }else if(opt === "*"){
                          return num1  * num2 
                      }else if(opt === "/"){
                          return num1  / num2 
                      }
                      else{
                          return "Enter Correct operator"
                      }
              }    
              var num1 = parseInt(prompt("enter number 1"))
              var opt = prompt("enter opt");
              var num2 = parseInt(prompt("enter number 1"))
           
              var add = calc(num1 , opt , num2)
         
         
              document.write("Number ONE:"+num1 + "<br> Operator"+opt+"<br> Numeber TWO:"+num2+"<br> Calculation :"+add)

              */
                   //Question 5
                   /*
        function sqaure(num1){
            var z = num1*num1 ;
            document.write(z);
        }
        var num1 = parseInt(prompt("enter number "))
        sqaure(num1);
       */
               //Question 7
          /*     
        function count(startValue , endValue){
            for(var i = startValue ; i <= endValue ; i++){
       
                 document.write(i  + " <br>") 
       
            }
       
        }    
        var firstNum = parseInt(prompt("Enter Start Value"))
        var endNum = parseInt(prompt("Enter End Value"))
        count(firstNum , endNum)
*/
                //Question 9

/*
        function area(width , height){
            var a = width*height;
            document.write(a);
        }
        var width = parseInt(prompt("Enter width"))
        var height = parseInt(prompt("Enter height"))
        area(width,height);
        */
       
                 //Question 10
                 /*
        function isPal(str){
            var reverse=str.split("").reverse().join("");
            return str.toLowerCase() === reverse.toLowerCase();
        }
        console.log(isPal("mom"));
 */
             //Question 11  


          