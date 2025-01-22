function submitLetter() {
    // Get the value of the text area
    const letterContent = document.getElementById('loveLetter').value;
  
    // Check if content is not empty
    if (letterContent.trim() === "") {
      alert("Please write something before sending.");
      return;
    }
  
    // Create a new letter element
    const newLetter = document.createElement('div');
    newLetter.classList.add('letter');
    newLetter.textContent = letterContent;
  
    // Append the new letter to the letters list
    const lettersList = document.getElementById('lettersList');
    lettersList.insertBefore(newLetter, lettersList.firstChild); // Add new letter at the top
  
    // Clear the textarea
    document.getElementById('loveLetter').value = "";
  }
  