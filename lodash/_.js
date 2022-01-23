const _ = {
    // Clamp method
    clamp(num, lower, upper) {
        if(num >= lower && num <= upper){
            return num;
        }
        else if(num < lower){
            return lower;
        }
        else if(num > upper){
            return upper;
        }
    },

 /*   clamp(number, lower, upper){
        var lowerClampedValue = Math.max(number, lower);
        var clampedValue = Math.min(lowerClampedValue, upper);
        return clampedValue;
    }
*/

    //InRange
    inRange(number, start , end){
        let num = number
        let sValue = start
        let eValue = end

        if(end == null){
            sValue = 0
            eValue = start
        }
        if(start > end){
            sValue = end
            eValue = start
        }
        if(num >= sValue && num < eValue){
            return true
        }
        else{

            return false
        }
    },

    //Words 
    words(string){
        let result = string.split(' ')
        return result;
    },

    //Pad
    pad(string, length){
    if(length > string.length){
        let fPad = 0
        let bPad = 0
        let rLength = length - string.length 
        if(rLength%2 === 0){
            fPad = rLength/2
            bPad = rLength/2
        }
        else{
            fPad = rLength/2
            bPad = rLength/2 + 1
        }
        const paddedString = ' '.repeat(fPad) + string + ' '.repeat(bPad)
        return paddedString
        }
    else{
        return string
        }
    },

    //Has
    has(object, key){
        hasKey = object[key] !== undefined
        return hasKey
    },

    //Invert
    invert(object){
        let invertedObject = {}
        for(let key in object){
            const originalValue = object[key]
            invertedObject = {originalValue : key}
        }
        return invertedObject
    },

    //Find Key
    findKey(object, pfunc){
        for(let key in object){
            let value = object[key]
            pReturnValue = pfunc(value)
            if(pReturnValue){
                return key
            }

        }
        undefined
        return undefined
    }

};

//_.inRange(2, 1, 3)
//_.inRange(0, 1, 4)




// Do not write or modify code below this line.
module.exports = _;