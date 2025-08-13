let AnswerWord = 'ঝাড়া';
let RowPosition = 1;
let WinStreak = localStorage.getItem('WinStreak');

if (WinStreak === null) {
    WinStreak = 0;
} else {
    WinStreak = parseInt(WinStreak);
}

function BanglaValidation(InputWord) {
    const BanglaCharRegex = /^[\u0980-\u09FF]*$/;
    const trimmed = InputWord.trim();
    return BanglaCharRegex.test(trimmed);
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
function FirstLetterCorrect(SplitInput, SplitAnswer) {
    if (SplitInput[0] === SplitAnswer[0] && SplitInput[1] === SplitAnswer[1]) {
        document.getElementById(`${RowPosition}x1`).style.backgroundColor = 'var(--green)';
    } else if (SplitInput[0] === SplitAnswer[0] && SplitInput[1] !== SplitAnswer[1]) {
        document.getElementById(`${RowPosition}x1`).style.backgroundColor = 'var(--yellow)';
    } else {
        document.getElementById(`${RowPosition}x1`).style.backgroundColor = 'var(--red)';
    }
}
function SecondLetterCorrect(SplitInput, SplitAnswer) {
    if (SplitInput[2] === SplitAnswer[2] && SplitInput[3] === SplitAnswer[3]) {
        document.getElementById(`${RowPosition}x2`).style.backgroundColor = 'var(--green)';
    } else if (SplitInput[2] !== SplitAnswer[2] ||  SplitInput[3] !== SplitAnswer[3]) {
        document.getElementById(`${RowPosition}x2`).style.backgroundColor = 'var(--yellow)';
    } else {
        document.getElementById(`${RowPosition}x2`).style.backgroundColor = 'var(--red)';
    }
}

function clickPress(event) {
    if (event.key === 'Enter') {
        const InputWord = document.getElementById('word').value;
        const SplitInput = InputWord.split('');
        const SplitAnswer = AnswerWord.split('');
        // If user still has tries, and hasn't given the correct answer
        if (InputValidation(InputWord)) {
            if (RowPosition <= 5 && RowPosition > 0 && InputWord !== AnswerWord) {
                    FirstLetterCorrect(SplitInput, SplitAnswer);
                    SecondLetterCorrect(SplitInput, SplitAnswer);
                    document.getElementById(`${RowPosition}x1`).innerHTML = SplitInput[0] + SplitInput[1];
                    document.getElementById(`${RowPosition}x2`).innerHTML = SplitInput[2] + SplitInput[3];
                    RowPosition++;                
            }
            else if (RowPosition > 5) {
                WinStreak = 0;
                localStorage.setItem('WinStreak', WinStreak.toString());
                document.getElementById('WinStreak').textContent = WinStreak.toString();
                alert('You Lost :(! Your Streak Has Been Reset. Come Again Tommorow To Start Again.');
            }
            else if (RowPosition<=5 && InputWord === AnswerWord) {
                document.getElementById(`${RowPosition}x1`).style.backgroundColor = 'var(--green)';
                document.getElementById(`${RowPosition}x2`).style.backgroundColor = 'var(--green)';
                document.getElementById(`${RowPosition}x1`).innerHTML = SplitInput[0] + SplitInput[1];
                document.getElementById(`${RowPosition}x2`).innerHTML = SplitInput[2] + SplitInput[3];
                RowPosition++;
                WinStreak++;
                localStorage.setItem('WinStreak', WinStreak.toString());
                document.getElementById('WinStreak').textContent = WinStreak.toString();
                alert('You Won :)! Come Again Tommorow To Add To Your Streak.');
            }
        }
        else {
            alert('Invalid Input. Try Again.');
        }
    }
}

