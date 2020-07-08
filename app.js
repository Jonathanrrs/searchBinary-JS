//Search binary iterative
function searchBinary(array, item) {

    var min = 0;
    var max = array.length - 1;


    while (min <= max) {
        var mitad = Math.floor((min + max) / 2);
        var adivinar = array[mitad];
        if (adivinar === item) {
            return mitad;
        }
        if (adivinar > item) {
            max = mitad - 1;
        }
        else {
            min = mitad + 1;
        }
    }
    return -1;


}

console.log(searchBinary([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 5));

//Search binary recursive

function searchBinaryRecursive(array, item) {

    function recursive(min, max) {
        if(min > max) {
            return -1;
        }
        var mitad = Math.floor((min + max) / 2);
        var adivinar = array[mitad];
        if (adivinar === item) {
            return mitad;
        }
        if (adivinar > item) {
            return recursive(min, mitad-1);
        }
        return recursive(mitad+1, max);
    }

    return recursive(0, array.length-1)
}

console.log(searchBinaryRecursive([1,2,3,4,5,6,7,8,9,10,11], 6));
