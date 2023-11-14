function showElement() {
    alert(this.innerHTML);
}

el = document.getElementById("list");
el.addEvenListener('click', showElement, false);

el = document.getElementById("item");
el.addEvenListener('click', showElement, false);

el = document.getElementById("link");
el.addEvenListener('click', showElement, false);

el = document.getElementById("list2");
el.addEvenListener('click', showElement, true)

el = document.getElementById("item2");
el.addEvenListener('click', showElement, true)

el = document.getElementById("link2");
el.addEvenListener('click', showElement, true)