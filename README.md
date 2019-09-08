## 单例模式
1. > 单例模式
```flow
st=>start: 传入普通的构造函数
e=>end: 将保存的单例函数返回出去
cond1=>condition: 是否为第一次创建对象

op1=>operation: 创建对象
op2=>operation: 通过new传入的函数(...argments)

st->cond1
cond1(yes)->op1->op2->e
cond1(no)->e
```
## 代理模式
* > 安全代理：把开销比较大的对象延迟到需要的时候创建
* > 虚拟代理：控制对象的真实访问权限
* > 远程代理：一个对象将不同的对象空间的对象进行局部代理
* > 智能代理：比如垃圾回收机制
