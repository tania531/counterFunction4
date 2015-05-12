function countString(str){

    str = "Count me in";

    var wordCount = 0;
    var charCount = 0;
    var spaceCount = 0;
    var aveWordLength = 0;

    var wordsArr = str.split(' ');

    var wordLengthTotal = 0;
    wordsArr.forEach(function(w){
        wordCount++;
        console.log('w.length: ', w.length);
        console.log('w.wordCount: ', wordCount);

     /*   (w.length).reduce(function(w.length, w.length) {
          return w.length + w.length;
        }, 0);
       */
        wordLengthTotal += w.length;
        aveWordLength = wordLengthTotal  / wordCount;
        console.log('aveWordLength: ', aveWordLength);
    });

    var charsArr = str.split('');
    //console.log('charsArr: ', charsArr);
    charsArr.forEach(function(c){
        if(c === " "){
            spaceCount++;
        }
        charCount++;
     //   console.log('charCount: ', charCount);
     //   console.log('spaceCount: ', spaceCount);
    });

    var results = {wordCount:wordCount,
                   charCount:charCount,
                   spaceCount:spaceCount,
                   aveWordLength:aveWordLength
                  };
    return results;
}

var string = "Count me in";
var result = countString(string);
console.log('result: ', result);
