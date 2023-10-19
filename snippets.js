var searchAnyText = '[a-z]*';

function getArrayAllWordsTwoLettersSame() {
    var wordsTwoLettersSame = [];
    return Array.from(WF.currentItem().getChildren())
    .forEach(child=>wordsTwoLettersSame.push(child.getNameInPlainText()));
}

function buildRegex(searchCharacter) {
    var regexString = searchAnyText + searchCharacter + searchAnyText;
    return new RegExp(regexString);
}

/* this is where I'm stuck: actually applying the regex filter to the list of words*/
// function filterWordList(list, regex) {
//     var lis = new Array();
//     list.filter(regex.test)
// }

// wordsTwoLettersSame.forEach(
//     word=>console.log(searchPattern.exec(word))
//     );