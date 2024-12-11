// Add event listeners for the checkpoints dynamically
const checkpointIds = [1, 2, 3];
checkpointIds.forEach(id => {
  document.getElementById(checkpoint${id}).addEventListener("click", () => handleCheckpointClick(id));
});

// Function to handle checkpoint click
function handleCheckpointClick(number) {
  // Reset the style for all checkpoints
  resetCheckpoints();

  // Change the style of the clicked checkpoint
  highlightCheckpoint(number);

  // Show the corresponding experience card
  showExperienceCard(number);
}

// Function to reset the styles of all checkpoints
function resetCheckpoints() {
  const checkpoints = document.querySelectorAll(".checkpoint");
  checkpoints.forEach(checkpoint => {
    checkpoint.style.backgroundColor = "#00bcd4"; // Default color
    checkpoint.style.color = "#fff"; // Default text color
  });
}

// Function to highlight the clicked checkpoint
function highlightCheckpoint(number) {
  const clickedCheckpoint = document.getElementById(checkpoint${number});
  clickedCheckpoint.style.backgroundColor = "#fff"; // Change background to white
  clickedCheckpoint.style.color = "#000"; // Change text color to black
}

// Function to show the corresponding experience card
function showExperienceCard(number) {
  // Hide all experience cards
  const experienceCards = document.querySelectorAll(".experience-card");
  experienceCards.forEach(card => card.classList.remove("active"));
  
  // Show the selected experience card
  const experienceCard = document.getElementById(experience${number});
  if (experienceCard) {
    experienceCard.classList.add("active");
  }
}
