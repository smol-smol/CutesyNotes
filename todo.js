// Select elements
const notesContainer = document.getElementById("notes-container");
const addNoteBtn = document.getElementById("add-note-btn");
const changeBgBtn = document.getElementById("change-bg-btn");

// Retrieve saved notes from localStorage or initialize an empty array
let notes = JSON.parse(localStorage.getItem("notes")) || [];

// Function to display notes
function displayNotes() {
  notesContainer.innerHTML = ""; // Clear previous notes
  notes.forEach((note, index) => {
    const noteElement = document.createElement("div");
    noteElement.className = "note";
    noteElement.innerHTML = `
            <h2>Note ${index + 1}</h2>
            <p>${note}</p>
            <button class="delete-btn" onclick="deleteNote(${index})">x</button>
        `;
    notesContainer.appendChild(noteElement);
  });
}

// Function to delete a note
function deleteNote(index) {
  notes.splice(index, 1); // Remove the note from the array
  localStorage.setItem("notes", JSON.stringify(notes)); // Save the updated notes to localStorage
  displayNotes(); // Refresh displayed notes
}

// Event listener for adding a new note
addNoteBtn.addEventListener("click", () => {
  const noteText = prompt("Write your note here..."); // Use prompt to create a new note
  if (noteText && noteText.trim()) {
    notes.push(noteText.trim()); // Add the note to the array
    localStorage.setItem("notes", JSON.stringify(notes)); // Save notes to localStorage
    displayNotes(); // Refresh displayed notes
  }
});

// Event listener for changing the background color
changeBgBtn.addEventListener("click", () => {
  const colors = ["#ffe4e1", "#fadadd", "#ffb6c1", "#ffc0cb"]; // Array of pink shades
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor; // Apply a random background color
});

// Initialize the app by displaying saved notes
displayNotes();
