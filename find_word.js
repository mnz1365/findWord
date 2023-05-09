
var text = "it is good weather here tonight";
var word = "here";
var found = false;

text = text.split(" ");
for(var i=0;i<text.length;i++) {
    if(text[i] == word) {
        found = true;
    }
}



console.log(found);