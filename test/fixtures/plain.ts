import fs from 'fs';
import { b } from './dep';

var x = "a" + b;
let y: number;
export function sum(a: number,b2: number) {
    y = a;
    return a+b2+x + fs.sep + y;
}
