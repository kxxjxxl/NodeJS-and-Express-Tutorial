// so we are bascially creating the module here and then as long as we are executing 
// it here in the program, we can require this module to execute somewhere
// where we need it and it would work perfectly fine


const num1 = 5
const num2 = 10

function addValues() {
  console.log(`the sum is : ${num1 + num2}`)
}

addValues() 