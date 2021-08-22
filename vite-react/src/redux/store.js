/**
 * 该文件专门用于暴露一个store对象，整个应用只有一个stroe对象
*/

// 引入createStore, 专门用于创建redux中最为核心的stroe对象
import { createStore, applyMiddleware } from "redux";

// 引入redux-thunk,用于支持异步action
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

// 引入汇总之后的reducer
import allReducer from "./reducers";

// 暴露store
export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)));