import { union } from 'lodash';

const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9,10];
const wrong = "hello";

//--------------------
// We don't have any type-check
//--------------------
const result = union(arr1,arr2,wrong); // input parameter can be only array
