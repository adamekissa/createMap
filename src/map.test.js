import {map} from './map.js'

test("Double each number", () =>{
    const inputArray = [10, 30, 20];
    const callBackFn = v => v * 2;
    const result = [20, 60, 40]
    expect(map(inputArray, callBackFn)).toEqual(result)
});

test("Test empty array input", () =>{
    const inputArray = [];
    const callBackFn = v => v * 2;
    const result = []
    expect(map(inputArray, callBackFn)).toEqual(result)
});

test("Rturn length of each string", () =>{
    const inputArray = ["Honda", "Audi", "Jaguar"];
    const callBackFn = v => v.length;
    const result = [5, 4, 6]
    expect(map(inputArray, callBackFn)).toEqual(result)
});

test("Return the value of the firNamekey", () =>{
    const inputArray = [{firstName: "Olu", lastName: "Ben"}, {firstName: "Adam", lastName: "Jallow"}];
    const callBackFn = v => v.firstName;
    const result = ["Olu", "Adam"]
    expect(map(inputArray, callBackFn)).toEqual(result)
});