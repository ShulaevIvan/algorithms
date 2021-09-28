document.addEventListener('DOMContentLoaded', ()=>{

'use strict'

let arr = [1,23,12313,12,3,2,1,66,7,3,4,6,8,9,123,53,23,5,5,8,123,15,16,1,77,55,4,3,33,23,34,65,43,65,88],
    arr2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
    output = document.querySelector('.output');

    const binarySearch = (array, item)=>{

        let start = 0,
            end = array.length,
            center,
            found = false,
            position = -1;
        while(found == false && start <=end){
            center = Math.floor((start + end) / 2);
            if(item === array[center]){
                position = center;
                found = true;
                output.textContent = `элемент находится по индексу ${position}`;
                return position;
            }
            if(item < array[center]) end = center -1;
            if(item > array[center]) start = center +1;
        }

    };

    arr.sort((a, b)=>{
    return a -b;
    });


console.log(binarySearch(arr, 7));

console.log(binarySearch(arr2, 16));














});