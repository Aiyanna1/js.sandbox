function getVowels(string) {
    let vowels = 'aAeEiIoOuU';
    let vowelsCount = 0;
    for (let i = 0; i < string.length ; i++){
        if (vowels.indexOf(string[i]) !== -1) {
            vowelsCount += 1;
        }
    }
    return vowelsCount;
}
console.log ('Number of vowels in ' + 'Javascript is really hard' + getVowels ('Javascript is really hard '));