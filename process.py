f = open("BengaliWordList_48.txt")
words= f.read().split("\n")
for word in words:
    if len(word) == 4:
        print(word)