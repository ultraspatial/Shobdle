let AnswerWord = 'ঝাড়া';
let RowPosition = 1;

const banglaOnlyRegex = /^[\u0980-\u09FF]*$/;

function BanglaValidation(InputWord) {
    const trimmed = InputWord.trim();
    return banglaOnlyRegex.test(trimmed);
}

function FourLetterValidation(InputWord) {
    if (InputWord.split('').length === 4) {
        return true;
    }
}
function ValidLetterValidation(InputWord) {
    const regex = /[\u0981\u0982\u0983\u09CD]/;
    return !regex.test(InputWord);
}
function InputValidation(InputWord) {
    return (
        InputWord !== null &&
        InputWord !== undefined &&
        BanglaValidation(InputWord) &&
        FourLetterValidation(InputWord) &&
        ValidLetterValidation(InputWord)
    );
}

function clickPress(event) {
    if (event.key === 'Enter') {
        const InputWord = document.getElementById('word').value;
        const SplitInput = InputWord.split('');
        const SplitAnswer = AnswerWord.split('');
        // If user still has tries, and hasn't given the correct answer
        if (InputValidation(InputWord)) {
            if (RowPosition <= 5 && RowPosition > 0 && InputWord !== AnswerWord) {
                    if (SplitInput[0] === SplitAnswer[0] && SplitInput[1] === SplitAnswer[1]) {
                        document.getElementById(`${RowPosition}x1`).style.backgroundColor = 'green';
                    } else {
                        document.getElementById(`${RowPosition}x1`).style.backgroundColor = 'red';
                    }
                    if (SplitInput[2] === SplitAnswer[2] && SplitInput[3] === SplitAnswer[3]) {
                        document.getElementById(`${RowPosition}x2`).style.backgroundColor = 'green';
                    } else {
                        document.getElementById(`${RowPosition}x2`).style.backgroundColor = 'red';
                    }
                    document.getElementById(`${RowPosition}x1`).innerHTML = SplitInput[0] + SplitInput[1];
                    document.getElementById(`${RowPosition}x2`).innerHTML = SplitInput[2] + SplitInput[3];
                    RowPosition++;                
            }
            else if (RowPosition > 5) {
                alert('You Lose');
            }
            else if (RowPosition<=5 && InputWord === AnswerWord) {
                document.getElementById(`${RowPosition}x1`).style.backgroundColor = 'green';
                document.getElementById(`${RowPosition}x2`).style.backgroundColor = 'green';
                document.getElementById(`${RowPosition}x1`).innerHTML = SplitInput[0] + SplitInput[1];
                document.getElementById(`${RowPosition}x2`).innerHTML = SplitInput[2] + SplitInput[3];
                RowPosition++;
                setTimeout(alert('You Win'), 500);
            }
        }
        else {
            alert('Invalid Input');
        }
    }
}

