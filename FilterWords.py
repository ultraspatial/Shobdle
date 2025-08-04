import unicodedata


_BASE_CONSONANT_RANGE = range(0x0995, 0x09B9 + 1)
_BASE_CONSONANTS = {chr(code) for code in _BASE_CONSONANT_RANGE}
_INDEPENDENT_VOWELS = {chr(code) for code in range(0x0985, 0x0994 + 1)}


def filter_4_char_words():
    with open('BengaliWordList_48.txt') as f:
        words = f.read().split('\n')
        four_char_words = [word for word in words if len(word) == 4]
        return four_char_words


def count_main_letters(word):
    word = unicodedata.normalize('NFC', word)
    main_letters = _BASE_CONSONANTS | _INDEPENDENT_VOWELS

    return sum(1 for char in word if char in main_letters)


def filter_two_main_letter_words(word_list):
    return [word for word in word_list if count_main_letters(word) == 2]


if __name__ == '__main__':
    filtered_words = filter_two_main_letter_words(filter_4_char_words())
    with open('filtered.txt', 'w') as f:
        f.write('\n'.join(filtered_words))

