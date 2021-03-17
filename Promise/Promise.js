function Promise(executor) {
	//添加属性
	this.PromiseState = "pending";
	this.PromiseResult = null;

	//声明属性
	this.callback = {};
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
		if (self.callback.onResolved) {
			self.callback.onResolved(data);
		}
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
		if (self.callback.onRejected) {
			self.callback.onRejected(data);
		}
	}
	try {
		executor(resolve, reject);
	} catch (e) {
		reject(e);
	}
}

Promise.prototype.then = function (onResolved, onRejected) {
	// 调用回调函数
	if (this.PromiseState === "fulfilled") {
		onResolved(this.PromiseResult);
	}
	if (this.PromiseState === "rejected") {
		onRejected(this.PromiseResult);
	}
	if (this.PromiseState === "pending") {
		// 保存回调函数
		this.callback = {
			onRejected: onRejected,
			onResolved: onResolved,
		};
	}
};
