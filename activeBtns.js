const defaultOptionState = {
  fontFamily: "",
  isCellActivate: false,
  isBoldSelected: false,
  isItalicSelectd: false,
  isUnderlineselected: false,
  isTextAlign: "left", // it can be right and center also
  textColor: "#000",
  backgroundColor: "#fff",
  fontSize: 14,
};

let activeOptionState;
let activateId = document.getElementById("activate-id");
let activeCell = null;
activateId.innerText = "null";

const textAlignments = document.getElementsByClassName("alignment");
const boldElement = document.getElementById("bold");
const italicElment = document.getElementById("italic");
const underlineElement = document.getElementById("underline");
function changeTheBehaviourOfSellOnFocus() {
  if (activeOptionState.isBoldSelected) {
    boldElement.classList.add("active-option");
  } else {
    boldElement.classList.remove("active-option");
  }
  if (activeOptionState.isItalicSelectd) {
    italicElment.classList.add("active-option");
  } else {
    italicElment.classList.remove("active-option");
  }
  if(activeOptionState.isUnderlineselected){
    underlineElement.classList.add("active-option");
  }else {
    underlineElement.classList.remove("active-option");
  }
  console.log(activeOptionState.textAlign);
  highLightTheTextAlignMentBtns(activeOptionState.isTextAlign);
}

function highLightTheTextAlignMentBtns(textAlignValue) {
  for (let i = 0; i < 3; i++) {
    if (textAlignments[i].getAttribute("data-value") === textAlignValue) {
      textAlignments[i].classList.add("active-option");
    } else {
      textAlignments[i].classList.remove("active-option");
    }
  }
}

// when each shell is focused this function is triggered
function onSellFocus(event) {
  if (activeCell && activeCell.id == event.id) return;
  activeCell = event.target;
  activateId.innerText = event.target.id;

  const initialStyle = getComputedStyle(activeCell);

  activeOptionState = {
    fontFamily: initialStyle.fontFamily,
    isCellActivate: activeCell.classList.contains("active-option"),
    isBoldSelected: initialStyle.fontWeight === "600",
    isItalicSelectd: initialStyle.fontStyle === "italic",
    isUnderlineselected: initialStyle.textDecoration.includes("underline"),
    isTextAlign: initialStyle.textAlign, // it can be right and center also start
    textColor: initialStyle.color,
    backgroundColor: initialStyle.backgroundColor,
    fontSize: initialStyle.fontSize,
  };
  changeTheBehaviourOfSellOnFocus();
}

// when we want to make the text bold then this function is triggered
function makeTheTextToBold(boldBtn) {
  // to show a hover effect is that option is selected or not
  // make the text area to bold
  boldBtn.classList.toggle("active-option");
  if (activeCell != null) {
    if (activeOptionState.isBoldSelected) {
      activeCell.style.fontWeight = "400";
      activeOptionState.isBoldSelected = false;
    } else {
      activeCell.style.fontWeight = "600";
      activeOptionState.isBoldSelected = true;
    }
  }
}

// when we want to make the text area as italic
function makeTheTextToItalic(italicBtn) {
  italicBtn.classList.toggle("active-option");
  if (activeCell) {
    if (activeOptionState.isItalicSelectd) {
      activeCell.style.fontStyle = "normal";
      activeOptionState.isItalicSelectd = false;
    } else {
      activeCell.style.fontStyle = "italic";
      activeOptionState.isItalicSelectd = true;
    }
  }
}

//  when you want to underline the text then this function will triggered
function underlineTheText(underlineBtn) {
  underlineBtn.classList.toggle("active-option");
  if (activeCell) {
    if (activeOptionState.isUnderlineselected) {
      activeCell.style.textDecoration = "none";
      activeOptionState.isItalicSelectd = false;
    } else {
      activeCell.style.textDecoration = "underline";
      activeOptionState.isUnderlineselected = true;
    }
  }
}


function alignText(alignBtn) {
  let selectedAlignment = alignBtn.getAttribute("data-value");
  highLightTheTextAlignMentBtns(selectedAlignment);
  if (activeCell) {
    activeCell.style.textAlign = selectedAlignment;
    activeOptionState.isTextAlign = selectedAlignment;
  }
}

function changeTheTextColor(textColorBtn) {
  const selectedcolor = textColorBtn.value;
  if (activeCell) {
    activeCell.style.color = selectedcolor;
    activeOptionState.textColor = selectedcolor;
  }
}

function changeTheBackgroundColor(backgroundColorBtn) {
  const selectedcolor = backgroundColorBtn.value;
  if (activeCell) {
    activeCell.style.backgroundColor = selectedcolor;
    activeOptionState.textColor = selectedcolor;
  }
}
