/*
VAQL
Copyright (C) Simon Raichl 2018
MIT License
Use this as you want, share it as you want, do basically whatever you want with this :)
*/
export const VAQL = {
  find: {
    it: (val, array, mode = 1) => {
      let assign = (condition = (!isAssigned)) => {
        if (condition){
          res = i;
          isAssigned = true;
        }
      }
      let err = (mode) =>{
        throw "Following mode: " + mode + " is an invalid mode!";
      }
      let res = null;
      let i = 0;
      let isAssigned = false;
      array.forEach((item) => {
        if (item === val){
          assign(mode === 2 || (mode === 1 && !isAssigned));
          if (mode === 3){
            assign();
            let temp = res;
            if (typeof res !== "object"){
              res = [];
              res.push(temp);
            }
            else{
              res = temp;
              res.push(i);
            }
          }
          else{
            (mode < 1 || mode > 3 || !parseInt(mode)) ? err(mode) : null;
          }
        }
        i++;
      });
      return res;
    },
    first: (val, array) => {
      return VAQL.find.it(val, array, 1);
    },
    last: (val, array) => {
      return VAQL.find.it(val, array, 2);
    },
    all: (val, array) => {
      return VAQL.find.it(val, array, 3);
    }
  },
  sort: (array, direction) => {
    let buffer;
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (direction === "reverse" ? array[i] > array[j] : array[i] < array[j]){
          buffer = array[j];
          array[j] = array[i];
          array[i] = buffer;
        }
      }
    }
    return array;
  },
  average: (array) => {
    let num = null;
    array.forEach((item) => {
      if (num === null){
        num = 0;
      }
      num += item;
    });
    return (num / array.length).toFixed(2);
  }
}
