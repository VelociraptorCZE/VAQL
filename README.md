# VAQL
This library has four functions at this point - you can find occurrences in arrays filtered by your value, sort arrays, make an average and finally compare arrays.
### Array.prototype.findInArray(value, mode)
This function finds an index or array of indexes in an array, it compares first parameter with every index in the array and its value. Returns first, last or all occurrences.
```js
let array = ["Foo", "Bar", "Bar"];
array.findInArray("Bar"); // returns 1
array.findInArray("Bar", "last"); // returns 2
array.findInArray("Bar", "all"); // returns array of [1, 2]
// Example
array[array.findInArray("Foo")] = "Baz"; // rewrites first occurence of "Foo" (0) with "Baz".
```
### Array.prototype.sortArray(direction)
This functions sorts a numeric array, you can use a parameter to specify if you want to sort the array from largest number to smallest and vice versa, although by default is array sorted from smallest to largest.
```js
let array = [8, 41, 20, 12, 98];
array.sortArray(); // returns [8, 12, 20, 41, 98]
array.sortArray("reverse"); // returns [98, 41, 20, 12, 8] 
```
### Array.prototype.average(decimalPlaces)
This function makes an average from an array, you can also specify number of decimal places to what it should be rounded.
```js
let array = [8, 41, 20, 12, 98, 78, 33, 13];
array.average(); // returns 37.875
array.average(2); // returns 37.88
```

### Array.prototype.compareArrays(array)
This function simply compares two arrays.
```js
[2, 5, 6].compareArrays([2, 5, 6]); // returns true 
[2, 5, 6].compareArrays([9, 5, 6]); // returns false
```
