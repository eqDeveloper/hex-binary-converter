"use strict"

// Take input text 
let convertButton = document.getElementById('convert-button');

// turn each word in the input text and make it in to a hex value

convertButton.addEventListener("click", () => {
    // Get the text from the input field and turn it in to an array of letters
    let inputText = document.getElementById('input-text').value.split("");
    
    let outputTable = `
    <hr>
    <table class="table table-bordered mt-3" id="new-table">
        <thead class="thead-dark">
            <tr id="original-text">
                <th>Character</th>
            </tr>
        </thead>
        <tbody>
            <tr id="hex-text">
                <th>Hex</th>
            </tr>
            <tr id="bin-text">
                <th>Binary</th>
            </tr>
        </tbody>
	</table>`
	
    document.getElementById("table-section").innerHTML = outputTable;

    for(let i = 0; i < inputText.length; i++) {

    let letterValue = inputText[i];
    let newRow = '<th>' + inputText[i] + '</th>';
    console.log(inputText[i]);
    $('#original-text').append('<th>' + inputText[i] + '</th>');
    $('#hex-text').append('<td>' + convertToHex(inputText[i]) + '</td>');
    $('#bin-text').append('<td>' + convertToBin(inputText[i]) + '</td>'); 

     }



})


// Convert text to Hexidecimal or Binary 


// Creating matching value pairs 
let valueTable = [
	{
		"Hexadecimal": "",
		"Binary": "",
		"ASCII": ""
	},
	{
		"Hexadecimal": "0",
		"Binary": "0",
		"ASCII": "NUL"
	},
	{
		"Hexadecimal": "1",
		"Binary": "1",
		"ASCII": "SOH"
	},
	{
		"Hexadecimal": "2",
		"Binary": "10",
		"ASCII": "STX"
	},
	{
		"Hexadecimal": "3",
		"Binary": "11",
		"ASCII": "ETX"
	},
	{
		"Hexadecimal": "4",
		"Binary": "100",
		"ASCII": "EOT"
	},
	{
		"Hexadecimal": "5",
		"Binary": "101",
		"ASCII": "ENQ"
	},
	{
		"Hexadecimal": "6",
		"Binary": "110",
		"ASCII": "ACK"
	},
	{
		"Hexadecimal": "7",
		"Binary": "111",
		"ASCII": "BEL"
	},
	{
		"Hexadecimal": "8",
		"Binary": "1000",
		"ASCII": "BS"
	},
	{
		"Hexadecimal": "9",
		"Binary": "1001",
		"ASCII": "HT"
	},
	{
		"Hexadecimal": "0A",
		"Binary": "1010",
		"ASCII": "LF"
	},
	{
		"Hexadecimal": "0B",
		"Binary": "1011",
		"ASCII": "VT"
	},
	{
		"Hexadecimal": "0C",
		"Binary": "1100",
		"ASCII": "FF"
	},
	{
		"Hexadecimal": "0D",
		"Binary": "1101",
		"ASCII": "CR"
	},
	{
		"Hexadecimal": "0E",
		"Binary": "1110",
		"ASCII": "SO"
	},
	{
		"Hexadecimal": "0F",
		"Binary": "1111",
		"ASCII": "SI"
	},
	{
		"Hexadecimal": "10",
		"Binary": "10000",
		"ASCII": "DLE"
	},
	{
		"Hexadecimal": "11",
		"Binary": "10001",
		"ASCII": "DC1"
	},
	{
		"Hexadecimal": "12",
		"Binary": "10010",
		"ASCII": "DC2"
	},
	{
		"Hexadecimal": "13",
		"Binary": "10011",
		"ASCII": "DC3"
	},
	{
		"Hexadecimal": "14",
		"Binary": "10100",
		"ASCII": "DC4"
	},
	{
		"Hexadecimal": "15",
		"Binary": "10101",
		"ASCII": "NAK"
	},
	{
		"Hexadecimal": "16",
		"Binary": "10110",
		"ASCII": "SYN"
	},
	{
		"Hexadecimal": "17",
		"Binary": "10111",
		"ASCII": "ETB"
	},
	{
		"Hexadecimal": "18",
		"Binary": "11000",
		"ASCII": "CAN"
	},
	{
		"Hexadecimal": "19",
		"Binary": "11001",
		"ASCII": "EM"
	},
	{
		"Hexadecimal": "1A",
		"Binary": "11010",
		"ASCII": "SUB"
	},
	{
		"Hexadecimal": "1B",
		"Binary": "11011",
		"ASCII": "ESC"
	},
	{
		"Hexadecimal": "1C",
		"Binary": "11100",
		"ASCII": "FS"
	},
	{
		"Hexadecimal": "1D",
		"Binary": "11101",
		"ASCII": "GS"
	},
	{
		"Hexadecimal": "1E",
		"Binary": "11110",
		"ASCII": "RS"
	},
	{
		"Hexadecimal": "1F",
		"Binary": "11111",
		"ASCII": "US"
	},
	{
		"Hexadecimal": "20",
		"Binary": "100000",
		"ASCII": "Space"
	},
	{
		"Hexadecimal": "21",
		"Binary": "100001",
		"ASCII": "!"
	},
	{
		"Hexadecimal": "22",
		"Binary": "100010",
		"ASCII": ""
	},
	{
		"Hexadecimal": "23",
		"Binary": "100011",
		"ASCII": "#"
	},
	{
		"Hexadecimal": "24",
		"Binary": "100100",
		"ASCII": "$"
	},
	{
		"Hexadecimal": "25",
		"Binary": "100101",
		"ASCII": "%"
	},
	{
		"Hexadecimal": "26",
		"Binary": "100110",
		"ASCII": "&"
	},
	{
		"Hexadecimal": "27",
		"Binary": "100111",
		"ASCII": "'"
	},
	{
		"Hexadecimal": "28",
		"Binary": "101000",
		"ASCII": "("
	},
	{
		"Hexadecimal": "29",
		"Binary": "101001",
		"ASCII": ")"
	},
	{
		"Hexadecimal": "2A",
		"Binary": "101010",
		"ASCII": "*"
	},
	{
		"Hexadecimal": "2B",
		"Binary": "101011",
		"ASCII": "+"
	},
	{
		"Hexadecimal": "2C",
		"Binary": "101100",
		"ASCII": ""
	},
	{
		"Hexadecimal": "2D",
		"Binary": "101101",
		"ASCII": "-"
	},
	{
		"Hexadecimal": "2E",
		"Binary": "101110",
		"ASCII": "."
	},
	{
		"Hexadecimal": "2F",
		"Binary": "101111",
		"ASCII": "/"
	},
	{
		"Hexadecimal": "30",
		"Binary": "110000",
		"ASCII": "0"
	},
	{
		"Hexadecimal": "31",
		"Binary": "110001",
		"ASCII": "1"
	},
	{
		"Hexadecimal": "32",
		"Binary": "110010",
		"ASCII": "2"
	},
	{
		"Hexadecimal": "33",
		"Binary": "110011",
		"ASCII": "3"
	},
	{
		"Hexadecimal": "34",
		"Binary": "110100",
		"ASCII": "4"
	},
	{
		"Hexadecimal": "35",
		"Binary": "110101",
		"ASCII": "5"
	},
	{
		"Hexadecimal": "36",
		"Binary": "110110",
		"ASCII": "6"
	},
	{
		"Hexadecimal": "37",
		"Binary": "110111",
		"ASCII": "7"
	},
	{
		"Hexadecimal": "38",
		"Binary": "111000",
		"ASCII": "8"
	},
	{
		"Hexadecimal": "39",
		"Binary": "111001",
		"ASCII": "9"
	},
	{
		"Hexadecimal": "3A",
		"Binary": "111010",
		"ASCII": ":"
	},
	{
		"Hexadecimal": "3B",
		"Binary": "111011",
		"ASCII": ";"
	},
	{
		"Hexadecimal": "3C",
		"Binary": "111100",
		"ASCII": "<"
	},
	{
		"Hexadecimal": "3D",
		"Binary": "111101",
		"ASCII": "="
	},
	{
		"Hexadecimal": "3E",
		"Binary": "111110",
		"ASCII": ">"
	},
	{
		"Hexadecimal": "3F",
		"Binary": "111111",
		"ASCII": "?"
	},
	{
		"Hexadecimal": "40",
		"Binary": "1000000",
		"ASCII": "@"
	},
	{
		"Hexadecimal": "41",
		"Binary": "1000001",
		"ASCII": "A"
	},
	{
		"Hexadecimal": "42",
		"Binary": "1000010",
		"ASCII": "B"
	},
	{
		"Hexadecimal": "43",
		"Binary": "1000011",
		"ASCII": "C"
	},
	{
		"Hexadecimal": "44",
		"Binary": "1000100",
		"ASCII": "D"
	},
	{
		"Hexadecimal": "45",
		"Binary": "1000101",
		"ASCII": "E"
	},
	{
		"Hexadecimal": "46",
		"Binary": "1000110",
		"ASCII": "F"
	},
	{
		"Hexadecimal": "47",
		"Binary": "1000111",
		"ASCII": "G"
	},
	{
		"Hexadecimal": "48",
		"Binary": "1001000",
		"ASCII": "H"
	},
	{
		"Hexadecimal": "49",
		"Binary": "1001001",
		"ASCII": "I"
	},
	{
		"Hexadecimal": "4A",
		"Binary": "1001010",
		"ASCII": "J"
	},
	{
		"Hexadecimal": "4B",
		"Binary": "1001011",
		"ASCII": "K"
	},
	{
		"Hexadecimal": "4C",
		"Binary": "1001100",
		"ASCII": "L"
	},
	{
		"Hexadecimal": "4D",
		"Binary": "1001101",
		"ASCII": "M"
	},
	{
		"Hexadecimal": "4E",
		"Binary": "1001110",
		"ASCII": "N"
	},
	{
		"Hexadecimal": "4F",
		"Binary": "1001111",
		"ASCII": "O"
	},
	{
		"Hexadecimal": "50",
		"Binary": "1010000",
		"ASCII": "P"
	},
	{
		"Hexadecimal": "51",
		"Binary": "1010001",
		"ASCII": "Q"
	},
	{
		"Hexadecimal": "52",
		"Binary": "1010010",
		"ASCII": "R"
	},
	{
		"Hexadecimal": "53",
		"Binary": "1010011",
		"ASCII": "S"
	},
	{
		"Hexadecimal": "54",
		"Binary": "1010100",
		"ASCII": "T"
	},
	{
		"Hexadecimal": "55",
		"Binary": "1010101",
		"ASCII": "U"
	},
	{
		"Hexadecimal": "56",
		"Binary": "1010110",
		"ASCII": "V"
	},
	{
		"Hexadecimal": "57",
		"Binary": "1010111",
		"ASCII": "W"
	},
	{
		"Hexadecimal": "58",
		"Binary": "1011000",
		"ASCII": "X"
	},
	{
		"Hexadecimal": "59",
		"Binary": "1011001",
		"ASCII": "Y"
	},
	{
		"Hexadecimal": "5A",
		"Binary": "1011010",
		"ASCII": "Z"
	},
	{
		"Hexadecimal": "5B",
		"Binary": "1011011",
		"ASCII": "["
	},
	{
		"Hexadecimal": "5C",
		"Binary": "1011100",
		"ASCII": "\\"
	},
	{
		"Hexadecimal": "5D",
		"Binary": "1011101",
		"ASCII": "]"
	},
	{
		"Hexadecimal": "5E",
		"Binary": "1011110",
		"ASCII": "^"
	},
	{
		"Hexadecimal": "5F",
		"Binary": "1011111",
		"ASCII": "_"
	},
	{
		"Hexadecimal": "60",
		"Binary": "1100000",
		"ASCII": "`"
	},
	{
		"Hexadecimal": "61",
		"Binary": "1100001",
		"ASCII": "a"
	},
	{
		"Hexadecimal": "62",
		"Binary": "1100010",
		"ASCII": "b"
	},
	{
		"Hexadecimal": "63",
		"Binary": "1100011",
		"ASCII": "c"
	},
	{
		"Hexadecimal": "64",
		"Binary": "1100100",
		"ASCII": "d"
	},
	{
		"Hexadecimal": "65",
		"Binary": "1100101",
		"ASCII": "e"
	},
	{
		"Hexadecimal": "66",
		"Binary": "1100110",
		"ASCII": "f"
	},
	{
		"Hexadecimal": "67",
		"Binary": "1100111",
		"ASCII": "g"
	},
	{
		"Hexadecimal": "68",
		"Binary": "1101000",
		"ASCII": "h"
	},
	{
		"Hexadecimal": "69",
		"Binary": "1101001",
		"ASCII": "i"
	},
	{
		"Hexadecimal": "6A",
		"Binary": "1101010",
		"ASCII": "j"
	},
	{
		"Hexadecimal": "6B",
		"Binary": "1101011",
		"ASCII": "k"
	},
	{
		"Hexadecimal": "6C",
		"Binary": "1101100",
		"ASCII": "l"
	},
	{
		"Hexadecimal": "6D",
		"Binary": "1101101",
		"ASCII": "m"
	},
	{
		"Hexadecimal": "6E",
		"Binary": "1101110",
		"ASCII": "n"
	},
	{
		"Hexadecimal": "6F",
		"Binary": "1101111",
		"ASCII": "o"
	},
	{
		"Hexadecimal": "70",
		"Binary": "1110000",
		"ASCII": "p"
	},
	{
		"Hexadecimal": "71",
		"Binary": "1110001",
		"ASCII": "q"
	},
	{
		"Hexadecimal": "72",
		"Binary": "1110010",
		"ASCII": "r"
	},
	{
		"Hexadecimal": "73",
		"Binary": "1110011",
		"ASCII": "s"
	},
	{
		"Hexadecimal": "74",
		"Binary": "1110100",
		"ASCII": "t"
	},
	{
		"Hexadecimal": "75",
		"Binary": "1110101",
		"ASCII": "u"
	},
	{
		"Hexadecimal": "76",
		"Binary": "1110110",
		"ASCII": "v"
	},
	{
		"Hexadecimal": "77",
		"Binary": "1110111",
		"ASCII": "w"
	},
	{
		"Hexadecimal": "78",
		"Binary": "1111000",
		"ASCII": "x"
	},
	{
		"Hexadecimal": "79",
		"Binary": "1111001",
		"ASCII": "y"
	},
	{
		"Hexadecimal": "7A",
		"Binary": "1111010",
		"ASCII": "z"
	},
	{
		"Hexadecimal": "7B",
		"Binary": "1111011",
		"ASCII": "{"
	},
	{
		"Hexadecimal": "7C",
		"Binary": "1111100",
		"ASCII": "|"
	},
	{
		"Hexadecimal": "7D",
		"Binary": "1111101",
		"ASCII": "}"
	},
	{
		"Hexadecimal": "7E",
		"Binary": "1111110",
		"ASCII": "~"
	},
	{
		"Hexadecimal": "7F",
		"Binary": "1111111",
		"ASCII": "DEL"
	},
	{
        "Hexadecimal": "20",
		"Binary": "00100000",
		"ASCII": " "
	}
];

let convertToHex = function(character) {
    let hexVal = '';
    for(let i=0; i < valueTable.length; i++) {
        if(valueTable[i].ASCII == character) {
            hexVal = valueTable[i].Hexadecimal;
        }
    }
    return hexVal;
};

let convertToBin = function(character) {
    let binVal = '';
    for(let i=0; i < valueTable.length; i++) {
        if(valueTable[i].ASCII == character) {
            binVal = valueTable[i].Binary;
        }
    }
    return binVal;
};