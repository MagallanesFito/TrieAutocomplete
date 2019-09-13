import random

file = open("words_alpha.txt",'r')
file_out = open("fillDatabase.js",'w')
word_list = []
MAX_WORDS=50000
for line in file:
	word_list.append("trie.insert("+ "'" +str(line)[:-1] +"'" +");\n")
#print(len(word_list))
for i in range(MAX_WORDS):
	index = random.randint(0,MAX_WORDS-1)
	file_out.write(word_list[index])

file.close()
file_out.close()