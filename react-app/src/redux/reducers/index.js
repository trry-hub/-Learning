/*
 该文件用于汇总所有的reducer为一个总的reducer
*/
import { combineReducers } from "redux";

import { getFileName } from "@/util";

const reducer = require.context("./", false, /(?<!index).js$/);

const reducers = {};
reducer.keys().forEach((file_path) => {
	// 引入为组件服务的reducer
	reducers[getFileName(file_path)] = reducer(file_path).default;
});

export default combineReducers(reducers);
