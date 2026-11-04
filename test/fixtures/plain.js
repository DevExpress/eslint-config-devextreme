import fs from 'fs';
import { b } from './dep.js';

var x = "a" + b;
export function sum(a,b2) {
    return a+b2+x + fs.sep;
}
