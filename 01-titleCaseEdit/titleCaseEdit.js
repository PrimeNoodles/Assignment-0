function titleCaseEdit(title) {
  // Insert code here;
  titleUp = title.split(" ");

  for(var i = 0; i < titleUp.length; i++) {
    titleUp[i] = titleUp[i].charAt(0).toUpperCase() + titleUp[i].substr(1);
  }

  return titleUp.join(" ");
}

// Do not edit this line;
module.exports = titleCaseEdit;