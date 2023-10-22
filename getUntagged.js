var words = [];
var twoLetters = [];
var untagged = new Map();

var letters = Array.from(WF.currentItem().getChildren()).splice(4);
letters.forEach(letter=>twoLetters.push(...letter.getChildren()));
twoLetters.forEach(twoLetters=>words.push(...twoLetters.getChildren()));

words.forEach(wordItem => {
    if (WF.getItemNameTags(wordItem).length === 0){ 
        untagged.set(wordItem,wordItem.getNameInPlainText().trim().length);
    }
});

// untagged.forEach((wordItem,len)=>{
//     if (len===4) {
//         wordItem.
//     }
// });

// untagged.forEach((k,v)=>{if (v===4) {WF.setItemName(k)

/* how does WF.setItemName() work? How about WF.editGroup()?
I tried this code
untagged.forEach((l,w)=>{
    if(w.getNameInPlainText()==="coho") { 
        WF.editItemName(w, "edited");
    }})

Nothing happened
*/

untagged.forEach((l,w)=>{
    if(l===4){
        console.log(w.getNameInPlainText());
    }
});