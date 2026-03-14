let n=5;
for(let i=0; i<n; i++){
let row= "";
for(let s=0; s<i; s++){
row+=" ";

}
row+= "1 ";
for(let j=n-i-1; j>1; j--){
row+= j+ " ";
}
for(let j=2; j<=n-i-1; j++){
row+=j + " ";
}
if(n-i-1>0){
row+="1";
}
console.log(row);

}
