//🧾DESCRIPTION
//Create a combat function that takes the player's current health and the amount of damage received, and returns the player's new health. Health can't be less than 0.
//function combat(health, damage) {
  // Write your code here
//}

//✅SOLUTION
function combat(health, damage) {
    let healthUser = health - damage;
    return (healthUser < 0) ? 0 : healthUser 
}
