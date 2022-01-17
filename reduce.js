//Extract values

const nameArr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
function extractValue(obj, key){
    return obj.reduce((accum, next)=>{
        accum.push(next[key]);
        return accum;
}, [])
}
//console.log(extractValue(nameArr, "name"));


function vowelCont(str){
    const vowels = 'aeiou';
    return str.split('').reduce((acc,next)=>{
        let lowerCased = next.toLowerCase();
        if(vowels.indexOf(lowerCased) !== -1){
            acc[lowerCased]++;
            } else {
                acc[lowerCased] = 1;
            }
        return acc; 
    },{})
}


//console.log(vowelCont("Helllo There"))


//addKeyAndValue

function addKeyAndValue(arr, key, value){

return arr.reduce((acc, next, i)=>{
    acc[i][key] = value
    return acc;
},arr)
}


//console.log(addKeyAndValue(nameArr,'title', 'Instructor'))

//partition
const arr = [1,2,3,4,5,6,7,8,9,10, 1, 1, 1]

function partition(arr, callBack){
    return arr.reduce((acc, next)=>{
        if(callBack(next)){
            acc[0].push(next);
        }else{
            acc[1].push(next);
        }
        return acc;

    },[[],[]])

}




function isEven(val){
return val % 2 === 0;
}
console.log(partition(arr, isEven));