class TrieNode{
	constructor(key){
		this.key = key;
		this.parent =null;
		this.children = {};
		this.end = false;
	}
	getWord(){
		var out = []
		var node = this;

		while(node !== null){
			out.unshift(node.key);
			node = node.parent;
		}
		return out.join('');
	}
	
}