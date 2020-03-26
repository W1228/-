// 创建一个链表节点 
var Node = function (value) {
	this.value = value;
	this.next = null;
}

var node1 = new Node(3);
var node2 = new Node(5);
var node3 = new Node(7);
node1.next = node2;
node2.next = node3;
// 遍历打印链表
function print(root) {
	if (root) {
		console.log("遍历打印链表", root.value);
		print(root.next)
	}
}
// print(node1);

// 获取链表的长度
function getLength(root) {
	if (!root) {
		return 0;
	}
	return 1 + getLength(root.next);
};

// var result = getLength(node1);
// console.log("链表长度", result); // 3 

// 通过下标获取某个数据
function getValue(root, index) {
	console.log("刚开始设置好的index", index);
	// index 在闭包中一直储存
	function _getValue(node, curIndex) { // 2.传入 root,curIndex = 0;
		console.log("在递增的curIndex", curIndex);
		if (curIndex === index) { // 3. curIndex 是否等于调用函数时设置的index,index在函数调用时设置并且保存， 第一次 curIndex = 0  等于 设置的index吗？
			return node; // 等于的话返回当前node;
		}
		if (!node) { // 如果传入的node没有值则返回null；
			return null;
		}
		return _getValue(node.next, curIndex + 1); // 运行完成再次调用辅助函数 并且将curIndex 加1 ， 现在为 0 + 1 
	};
	return _getValue(root, 0); // 1. 运行getValue函数先调用并返回第一个辅助函数，并将 curIndex 赋值为0；
};

// var result = getValue(node1, 2);
// console.log(result);

// 通过下标设置表中的某个数据
function setValue(root, index, value) {
	function _setValue(node, curIndex) {
		if (!node) {
			return null;
		}
		if (curIndex === index) {
			node.value = value;
		} else {
			_setValue(node.next, curIndex + 1);
		}
	};
	return _setValue(root, 0);
};

// var result = setValue(node1, 2,300);
// console.log(node1);

// 在指定下标的位置加入新节点
function insert(root, index, newNode) {
	function _insert(node, curIndex) {
		if (!node) {
			return null;
		}
		if (curIndex === index - 1) { // 获取到需要改变下标的前一位，比如找到1下标的地址存在0； 所以改变下标0的next指向就相当于变成了新的1
			var newValue = new Node(newNode); // 创建新节点
			newValue.next = node.next; // 新节点的next指向 指向0节点的原指向
			node.next = newValue; // 然后将0节点的next指向 指向新节点 
		} else {
			_insert(node.next, curIndex + 1);
		}
	}
	_insert(root, 0);
};
insert(node1, 1, 10);
// console.log(node1);

