
document.addEventListener('DOMContentLoaded', ()=>{
let arr = [1,23,12313,12,3,2,1,66,7,3,4,6,8,9,123,53,23,5,5,8,123,15,16,1,77,55,4,3,33,23,34,65,43,65,88],
    arr2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];


function quickSort(array){
    if(array.length <= 1){
        return array;
    }
    let centerIndex = Math.floor((array.length / 2)),
        center = array[centerIndex],
        less = [],
        greater = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] == center) continue;
        if(array[i] < center){
            less.push(array[i]);
        }else{
            greater.push(array[i]);
        }
    }

return [...quickSort(less), center, ...quickSort(greater)];
}

console.log(quickSort(arr))

});