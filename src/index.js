
exports.min = function min (array) {
	if (array != null && array.length != 0 && array != "" && typeof array != "undefined"){
  let arrNew=[];
let minValue = 0;
if(array.length > 0){
for(let i=0; i<array.length; i++){
Array.isArray(array[i]) ? arrNew[i]=Math.min.apply(this, [null, min(array[i])]):arrNew[i]=array[i];

}
}
minValue= Math.min.apply(null, arrNew);

return minValue;
}
else return 0;
};

exports.max = function max (array) {
	if (array != null && array.length != 0 && array != "" && typeof array != "undefined"){
  let arrNew=[];
let maxValue = 0;
if(array.length > 0){
for(let i=0; i<array.length; i++){
Array.isArray(array[i]) ? arrNew[i]=Math.max.apply(this, [null, max(array[i])]):arrNew[i]=array[i];

}
}
maxValue= Math.max.apply(null, arrNew);

return maxValue;
}
else return 0;
};

exports.avg = function avg (array) {
if (array != null && array.length != 0 && array != "" && typeof array != "undefined"){
 let arrNew=[];
let avgValue = 0;
if(array.length > 0){
for(let i=0; i<array.length; i++){
Array.isArray(array[i]) ? arrNew[i]=avg(array[i]):arrNew[i]=array[i];
}
}
for(let j = 0; j<arrNew.length; j++){
avgValue +=arrNew[j];
}

return avgValue =avgValue/arrNew.length;
}
else return 0;
};
