const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',

};



// 1.Разделить ключи по символам.
// 2 Добавить каждой точке 10, кажому тире 11. пробел - 10 знаков *.
// 3 Если итоговое число меньше 10 > добить нулями в начало.
// 4 записать полученное число в обект вторым значением.
// 5 Входное выражение разделить посимвольно.
// 6. Каждому сиволу присвоить число из обекта - значение 2.
// 7. Конкатенировать все полученные числа в одну сттроку.
// let newArray = {};
// for (let key in MORSE_TABLE) {
//     let array = key.split('').map(function(num) {
//         if (num === '-') {
//             return '11'
//         } else if (num === '.') {
//             return '10'
//         } else {
//             return '**********'
//         }

//     });


//     array.unshift('00000000');
//     let stringNum = array.join('');
//     let splitNum = stringNum.slice(-10);
//     newArray = [splitNum]


// }
// console.log(newArray);






// const mapping = {
//     "A": ".-",
//     "B": "-...",
//     "C": "-.-.",
//     "D": "-..",
//     "E": ".",
//     "F": "..-.",
//     "G": "--.",
//     "H": "....",
//     "I": "..",
//     "J": ".---",
//     "K": "-.-",
//     "L": ".-..",
//     "M": "--",
//     "N": "-.",
//     "O": "---",
//     "P": ".--.",
//     "Q": "--.-",
//     "R": ".-.",
//     "S": "...",
//     "T": "-",
//     "U": "..-",
//     "V": "...-",
//     "W": ".--",
//     "X": "-..-",
//     "Y": "-.--",
//     "Z": "--..",


//     "0": "-----",
//     "1": ".----",
//     "2": "..---",
//     "3": "...--",
//     "4": "....-",
//     "5": ".....",
//     "6": "-....",
//     "7": "--...",
//     "8": "---..",
//     "9": "----."
// }


// function text2morse(morse) {
//     let input;
//     input = morse.toUpperCase();

//     let arr1 = input.split('');

//     let arr2 = arr1.map(x => {
//         if (mapping[x]) {
//             return mapping[x];
//         } else {
//             return x;
//         }
//     });

//     var code = arr2.join('')
//     console.log(arr1)
//     console.log(arr2)

//     let array = code.split('').map(function(num) {
//         if (num === '-') {
//             return '11'
//         } else {
//             return '10'
//         }
//     });
//     console.log(array)
//     array.unshift('00000000');
//     let stringNum = array.join('');
//     let splitNum = stringNum.slice(-10);
//     return splitNum;
// }
// console.log(text2morse('hello'));

function decode(expr) {



    // cut string to 10-symbols strings and add to encodedLetterArray
    function cutter(expr) {
        var encodedLetterArray = [];
        for (var i = 0; i < expr.length; i = i + 10) {
            encodedLetterArray.push(expr.slice(i, i + 10));
        }
        return encodedLetterArray;
    }

    // decode spaces
    function decodeSpaces(encodedLetterArray) {
        for (var i = 0; i < encodedLetterArray.length; i++) {
            if (encodedLetterArray[i] === "**********") {
                encodedLetterArray[i] = ' ';
            }
        }
        return encodedLetterArray;
    }

    // remove left padded zoros and return string trimmedEncodedLetter
    function removePrependZeros(encodedLetter) { // encodedLetter is string which is 10 characters long
        for (var i = 0; i < 10; i++) {
            if (encodedLetter[i] === "0") continue;
            else break;
        }
        trimmedEncodedLetter = encodedLetter.substring(i, encodedLetter.length);
        return trimmedEncodedLetter;
    }

    // run removing zeroes on array and return trimmedEncodedLetterArray;
    function removePrependZerosArray(encodedLetterArray) {
        var trimmedEncodedLetterArray = [];
        for (var i = 0; i < encodedLetterArray.length; i++) {
            var trimmedEncodedLetter = removePrependZeros(encodedLetterArray[i]);
            trimmedEncodedLetterArray.push(trimmedEncodedLetter);
        }
        return trimmedEncodedLetterArray;
    };

    // decode string of numbers to '.' and '-', return morseLetter
    function parseLetter(trimmedEncodedLetter) {
        var morseLetter = '';
        for (var i = 0; i < trimmedEncodedLetter.length; i = i + 2) {
            if (trimmedEncodedLetter.substring(i, i + 2) === '10') {
                morseLetter = morseLetter.concat('.');
            } else if (trimmedEncodedLetter.substring(i, i + 2) === '11') {
                morseLetter = morseLetter.concat('-');
            } else {
                morseLetter = morseLetter.concat(' ');
            }
        }
        return morseLetter;
    }

    // run decoding on array and return morseLetterArray
    function parseLetterArray(trimmedEncodedLetterArray) {
        var morseLetterArray = [];
        for (var i = 0; i < trimmedEncodedLetterArray.length; i++) {
            var morseLetter = parseLetter(trimmedEncodedLetterArray[i]);
            morseLetterArray.push(morseLetter);
        }
        return morseLetterArray;
    }

    // decode morse array to final sentence
    function decodeMorse(morseLetterArray) {
        var decodedSentence = [];
        for (var i = 0; i < morseLetterArray.length; i++) {
            if (MORSE_TABLE.hasOwnProperty([morseLetterArray[i]])) {
                decodedSentence.push(MORSE_TABLE[morseLetterArray[i]]);
            } else if (morseLetterArray[i] = ' ') {
                decodedSentence.push(' ');
            }
        }
        return decodedSentence;
    }
    // cut string to 10-symbols strings in array
    var encodedLetterArray = cutter(expr);
    // decode spaces
    var encodedLetterArray = decodeSpaces(encodedLetterArray);
    // remove left padded zoros and make array ready to decode
    var trimmedEncodedLetterArray = removePrependZerosArray(encodedLetterArray);
    // decode encoded array to morse array
    var morseLetterArray = parseLetterArray(trimmedEncodedLetterArray);
    // decode morse array to final sentence
    var decodedSentence = decodeMorse(morseLetterArray).join('');


    return decodedSentence;
}

module.exports = {
    decode
}