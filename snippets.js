var children = Array.from(WF.currentItem().getChildren());
children.forEach(child=>console.log(child.getNameInPlainText()));

/*
const foundParagraph = Array.from(nodes).find((node) => node === testingCondition);

testing condition example:

var found = array.find(function (element) {
        return element > 20;
});
*/

//regex 