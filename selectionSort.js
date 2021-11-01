
document.addEventListener('DOMContentLoaded', ()=>{
let arr = [1,23,12313,12,3,2,1,66,7,3,4,6,8,9,123,53,23,5,5,8,123,15,16,1,77,55,4,3,33,23,34,65,43,65,88],
    arr2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];


function selectionSort(array){

    for(let i = 0; i < array.length; i++){
        let minIndex = i;
        for(let j = i; j < array.length; j++){

            if(array[j] < array[minIndex]){
                minIndex = j;
            }
        }
    let tmp = array[i]
        array[i] = array[minIndex]
        array[minIndex] = tmp
    }

return array
}

console.log(selectionSort(arr))



});
