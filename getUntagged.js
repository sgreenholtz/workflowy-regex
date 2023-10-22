/* Returns a map of [word name, word object] */
function getAllWordsAsMap() {
    var letters = Array.from(WF.currentItem().getChildren()).splice(4);
    
    var twoLetters = [];
    letters.forEach(letter=>twoLetters.push(...letter.getChildren()));
    
    var wordObjects = [];
    twoLetters.forEach(twoLetters=>wordObjects.push(...twoLetters.getChildren()));
    
    var wordMap = new Map()
    wordObjects.forEach(wordObject=> wordMap.set(wordItem,wordItem.getNameInPlainText().trim(), wordObject));
    
    return wordMap;
}

var untagged = new Map();
getAllWordsAsMap().values().forEach(wordItem => {
    if (WF.getItemNameTags(wordItem).length === 0){ 
        untagged.set(wordItem,wordItem.getNameInPlainText().trim().length);
    }
}); // !! ALERT!! untested code !!//

/* how does WF.setItemName() work? How about WF.editGroup()?
I tried this code
untagged.forEach((l,w)=>{
    if(w.getNameInPlainText()==="coho") { 
        WF.editItemName(w, "edited");
    }})

Nothing happened
*/