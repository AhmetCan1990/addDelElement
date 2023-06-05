const btnAdd = document.querySelector("#btnAdd");
const btnDel = document.querySelector("#btnDel");
const inpt = document.querySelector(".form-control");
btnAdd.addEventListener("click", addTag);
btnDel.addEventListener("click", delTag);
inpt.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    btnAdd.click();
  } else if (event.key == "Delete") {
    btnDel.click();
  }
});
function addTag() {
  let tagContent = inpt.value;
  if (tagContent === "") {
    alert("Please, enter the content of the list element");
  } else {
    let addlistItem = document.createElement("li");
    addlistItem.innerHTML = tagContent;
    document.querySelector(".list-group").appendChild(addlistItem);
    document.querySelector(".list-group").lastChild.className =
      "list-group-item";
    inpt.value = "";
  }
}
function delTag() {
  if (document.querySelector(".list-group").childElementCount == 0) {
    alert("There is no element to delete");
  } else {
    let dellist = document.querySelector(".list-group");
    dellist.removeChild(dellist.lastElementChild);
  }
}
