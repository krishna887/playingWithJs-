//this is example of callback function
   // display=(sum)=> console.log(sum);
   // calculate=(a,b,display1)=>{
   //    let result=a+b;
   //    display1(result);
   // }
   // calculate(5,5,display);

 //  this is example of setTimeout()

   // setTimeout(abc,3000);
   // function abc() {
   //    console.log("this content will display after 3 sec");
   // }
   // console.log("hello k xa yr");
//this is also example of setTimeout() function passing as argument
   // setTimeout(function(){ myFunction("this content will be display after 2 sec" )},2000);
   // function myFunction(abc){
   //    console.log(abc);
   // }
setInterval(time,1000);
function time(){
   let a=new Date();
   document.getElementById("abc").innerHTML=
   a.getHours()+":"+
   a.getMinutes()+":"+
   a.getSeconds();
}