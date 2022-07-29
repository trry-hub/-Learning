/*
 该文件用于汇总所有的reducer为一个总的reducer
*/
import { combineReducers } from "redux";
import { getFileName } from "@/utils";
const reducer = import.meta.globEager('./*.js');

let reducers = [];
for (const path in reducer) {
	reducers[getFileName(path)] = reducer[path].default;
}

export default combineReducers(reducers);
