import unicodedata
import regex

def Filter4CharWords():
    with open("BengaliWordList_48.txt") as f:
        words= f.read().split("\n")
        four_char_words = [word for word in words if len(word) == 4]

def Filter2ConsonantWords():
