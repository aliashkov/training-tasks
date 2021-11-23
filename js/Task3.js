function filterStrings(arrayOfStrings, maxLength){
    let newArray = arrayOfStrings.filter(array => array.length <= maxLength); 
    return newArray;
}

let result = filterStrings(['I love JS', 'some good thing', 'React'], 9);
console.log(result);