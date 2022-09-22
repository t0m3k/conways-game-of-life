// Run button

$("#onCheck").click(() => {
  gameState.state = GameState.states.RUNNING;
});

// Step button
$("#stepButton").click(() => {
  gameState.state = GameState.states.PAUSED;
  gameState.setStep();
});

// Pause button
$("#offCheck").click(() => {
  gameState.state = GameState.states.PAUSED;
});

// Random button
$("#randomFill").click(() => {
  game.random($("#fillChanceInput").val());
});
