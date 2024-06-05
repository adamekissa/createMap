function map(inputArray, callBackFn){
    const results = [];
    for (let element of inputArray){
        results.push(callBackFn(element));
    }
    return results;
}

export {map};

/*

*/