// Question 1: 
// Clean the room function: given an input of 
// [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
// make a function that organizes these into individual array that is ordered. 
// For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
// Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] 
// should return [[1,2], ["2", "3"]]

const sortAlphaNum= (arr, initalCall) => {
    arr.sort((a,b) =>{
        if((typeof a === 'string' || typeof b === 'string') && initalCall === true) {
            return 1;
        }else{
            return (a > b) ? 1 : -1
        }
    });

    return arr;
}

const answer1= (givenArray) => {

    let temp= [];
    let stringArray= [];
    let numArray= [];
    let returnArray= [];

    givenArray= sortAlphaNum(givenArray, true);
    
    givenArray.forEach((element, i) => {

        //check if the current element is the same as the next one
        if(givenArray[i+1] === element)
        {
            temp.push(element);
        }else{
             //check if the current element is the same as the last one
            if(givenArray[i-1] === element){
                temp.push(element);
            }

            // push an array or the single element
            if(temp.length !== 0)
            {
                numArray.push(temp);
                temp= [];
            }else{
                if(typeof element === 'string')
                    stringArray.push(element);
                else
                    numArray.push(element);
            }
        }
        
    });

    if(numArray.length > 0){
        returnArray.push(numArray);
    }

    if(stringArray.length > 0){
        returnArray.push(sortAlphaNum(stringArray, false));
    }

    console.log('============ANSWER==================');
    console.log(returnArray);
    console.log('====================================');
}

answer1([1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]);
answer1([1, "2", "3", 2]);

// Question 2: 
// Write a javascript function that takes an array of numbers and a target number. 
// The function should find two different numbers in the array that, when added together, 
// give the target number. 
// For example: answer([1,2,3], 4) should return [1,3]

const answer2 = (arr, target) => {

    let solution= [];
    let temp= 0;

    arr.forEach(fLvl => {
        arr.forEach(sLvl => {
            if(fLvl+sLvl === target){
                //push an array if there are more possible solutions
                solution.push([fLvl,sLvl]);    
            }
        });
        arr.shift();
    });

    console.log(solution);
}

answer2([1,2,3], 4);

// Question 3: 
// Write a function that converts HEX to RGB. 
// Then Make that function autodect the formats so that if you enter HEX color format it returns RGB and 
// if you enter RGB color format it returns HEX. 
// Bonus: Release this tool as a npm package.

const answer3 = (hexOrR=0, g=0, b=0) => {

    if(typeof hexOrR === 'string')
    {
        //HEX TO RGB | Returns a JSON Object
        hex = hexOrR.replace('#','');
        return ({   r: parseInt(hex.substring(0,2), 16), 
                    g: parseInt(hex.substring(2,4), 16), 
                    b: parseInt(hex.substring(4,6), 16)
                });

    }else{
        //RGB TO HEX | Returns a String
        return (`#${valueToHex(hexOrR)}${valueToHex(g)}${valueToHex(b)}`);
    }
}

const valueToHex = (val) => {
    let hex = val.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

console.log(answer3('#FFFFFF'));
console.log(answer3(255,255,255));