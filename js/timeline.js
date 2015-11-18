// figure out spacing based on number of child elements of ordered list

var children = document.querySelectorAll("#timeline-list > li"),
    i,
    count = children.length - 1, //li count minus the first child node
    offset = 100 / count, //figure out the offset 
    offset = offset.toFixed(5);//limit to 5 decimal places

for (i = 0; i < children.length; i++) {
    if (i == 0) {
        children[i].style.left = "0%";
    } else {
            children[i].style.left = offset * i + '%';
    }
}