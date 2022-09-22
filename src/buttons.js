// Run button

$("#onCheck").click(() => {
  gameState.setRunning();
});

// Step button
$("#stepButton").click(() => {
  gameState.setStep();
});

// Pause button
$("#offCheck").click(() => {
  gameState.setPaused();
});

// Random button
$("#randomFill").click(() => {
  game.random($("#fillChanceInput").val());
});
