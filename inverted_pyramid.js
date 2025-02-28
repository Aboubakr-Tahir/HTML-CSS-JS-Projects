const count=8;
const character="#";
let rows = [];

function Row_pyramid(Number_of_Rows , Row_Number){
    return " ".repeat(Number_of_Rows-Row_Number) + character.repeat(2*Row_Number-1) + " ".repeat(Number_of_Rows-Row_Number);
}

let reverted = true; 

for (let i=0;i<count;i++){
  if(reverted==false){
    rows.push(Row_pyramid(count,i+1));
    }
  else {
    rows.unshift(Row_pyramid(count,i+1));
  }
}
let result=""

for (const row of rows){
  result = result + row + "\n";
}

console.log(result) 