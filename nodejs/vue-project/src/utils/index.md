撸个demo先，先定义两份数据

```
function Foo() {
    this.a = 1;
}

function Bar() {
    this.c = 3;
}

Foo.prototype.b = 2;
Bar.prototype.d = 4;

let data = {
    info: {
        name: 'Leslie',
        age: 26,
        scores: [60, 66, 70, 80]
    }
};
let data2 = {
    info: {
        name: 'Leslie',
        age: 32,
        scores: [99, 66, 70, {
            name: 'john',
            age: 18
        },
        new Foo()]
    }
};
```

> 1、普通合并

```
let target = EXT().merge(data1, data2);
```

结果为：

![clipboard.png](https://segmentfault.com/img/bV50nr?w=427&h=497)

> 2、自定义配置进行合并

**isDeep：选择是否进行深合并，设置为 false 则只进行浅合并，默认为 true**

```
let target = EXT({ isDeep: false }).merge(data1, data2);
```

**includePrototype：选择是否要遍历对象的原型链，默认为 true**

```
let target = EXT({ includePrototype: false }).merge(data1, data2);
```

**forEach：对每个合并项进行自定义处理**

```
let target = EXT({
    forEach: function(target, name, sourceItem) {
        target[name] = sourceItem + ’hello， 自定义每个合并项‘;
        return target;
    }
}).merge(data1, data2);
```
