class Promise {
	constructor(executor) {
		//添加属性
		this.PromiseState = "pending";
		this.PromiseResult = null;

		//声明属性
		this.callbacks = [];
		//保存实例对象的 this 的值
		const self = this;

		// resolve 函数
		function resolve(data) {
			//判断状态
			if (self.PromiseState !== "pending") return;
			// 1. 修改对象的状态 ( promiseState)
			self.PromiseState = "fulfilled";
			// 1. 设置对象结果值 ( promiseResult)
			self.PromiseResult = data;

			//调用成功的回调函数
			setTimeout(() => {
				self.callbacks.forEach((item) => {
					item.onResolved(data);
				});
			});
		}

		// reject 函数
		function reject(data) {
			//判断状态
			if (self.PromiseState !== "pending") return;
			// 1. 修改对象的状态 ( promiseState)
			self.PromiseState = "rejected";
			// 1. 设置对象结果值 ( promiseResult)
			self.PromiseResult = data;

			//调用失败的回调函数
			setTimeout(() => {
				self.callbacks.forEach((item) => {
					item.onRejected(data);
				});
			});
		}

		try {
			// 同步调用 【执行器函数】
			executor(resolve, reject);
		} catch (e) {
			// 修改 promise 对象状态为 【失败】
			reject(e);
		}
	}

	then(onResolved, onRejected) {
		const self = this;
		// 判断回调函数
		if (typeof onRejected !== "function") {
			onRejected = (reason) => {
				throw reason;
			};
		}
		if (typeof onResolved !== "function") {
			onResolved = (reason) => reason;
		}
		return new Promise((resolve, reject) => {
			// 封装函数
			function callback(funcName) {
				try {
					// 获取回调函数的执行结果
					let result = funcName(self.PromiseResult);
					if (result instanceof Promise) {
						result.then(
							(v) => {
								resolve(v);
							},
							(r) => {
								reject(r);
							}
						);
					} else {
						// 结果的对象状态为【成功】
						resolve(result);
					}
				} catch (e) {
					reject(e);
				}
			}
			// 调用回调函数
			if (this.PromiseState === "fulfilled") {
				setTimeout(() => {
					callback(onResolved);
				});
			}
			if (this.PromiseState === "rejected") {
				setTimeout(() => {
					callback(onRejected);
				});
			}
			if (this.PromiseState === "pending") {
				// 保存回调函数
				this.callbacks.push({
					onRejected: function () {
						callback(onRejected);
					},
					onResolved: function () {
						callback(onResolved);
					},
				});
			}
		});
	}
	catch(onRejected) {
		return this.then(undefined, onRejected);
	}
	static resolve(value) {
		// 返会 Promise 对象
		return new Promise((resolve, reject) => {
			if (value instanceof Promise) {
				value.then(
					(v) => {
						resolve(v);
					},
					(r) => {
						reject(r);
					}
				);
			} else {
				resolve(value);
			}
		});
	}
	static reject(value) {
		// 返会 Promise 对象
		return new Promise((resolve, reject) => {
			reject(value);
		});
	}
	static all(params) {
		// 返回结果为 promise对象
		return new Promise((resolve, reject) => {
			let count = 0;
			let arr = [];
			// 遍历
			for (let i = 0; i < params.length; i++) {
				params[i].then(
					(v) => {
						// 得知对象的状态是成功的
						// 每个promise对象 都成功
						count++;
						arr[i] = v;
						if (count === params.length) {
							// 修改状态
							resolve(arr);
						}
					},
					(j) => {
						reject(j);
					}
				);
			}
		});
	}

	static race(params) {
		return new Promise((resolve, reject) => {
			for (let i = 0; i < params.length; i++) {
				params[i].then(
					(v) => {
						// 修改返回对象的状态为 【成功】
						resolve(v);
					},
					(j) => {
						// 修改返回对象的状态为 【失败】
						reject(j);
					}
				);
			}
		});
	}
}
