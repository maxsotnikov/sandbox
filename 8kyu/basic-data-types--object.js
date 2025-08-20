//🧾DESCRIPTION
// Give you a function animal, accept 1 parameter:obj like this:

// {name:"dog",legs:4,color:"white"}
// and return a string like this:

// "This white dog has 4 legs."


//✅SOLUTION 1️⃣:
function animal(obj){
  return `This ${obj["color"]} ${obj["name"]} has ${obj["legs"]} legs.`;
}
let obj={
  name:"dog",
  legs:4,
  color:"white"
}

//✅SOLUTION 2️⃣:
 // return (
        //   "This " +
        //   obj.color +
        //   " " +
        //   obj.name +
        //   " " +
        //   "has " +
        //   obj.legs +
        //   " " +
        //   "legs."
        // );