const names = [ "Annika",
"Charles",
"Simon",
"Gupta",
"Jordan",
"Michael",
"Steve",
"Jo",
"Sam",
"Matt",
"Ollie",
"Becky",
"Naomi",
"Sally"];
names.forEach( name  => {
   if (name.length <= 5){
      console.log(name)
   }  
});
names.forEach( name  => {
if (name.charAt(0) === "J"){
       console.log(name)
   }
});
names.forEach( name  => {
   if (name.includes ("o")||name.includes("O")) {
          console.log(name)
      }
   });