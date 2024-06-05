/**
 * 
 * @param {any[]} inputArray 
 * @param {function} callBackFn 
 * @returns array 
 */

function ourMap(inputArray, callBackFn){
    const results = [];
    for (let element of inputArray){
        results.push(callBackFn(element));
    }
    return results;
}

[5, 4, "string"].map((x, index, arr) => {
    console.log("x: ", x);
    console.log("index: ", index);
    console.log("arr: ", arr);
});

export {ourMap};

/*

*/