// Run button

$("#onCheck").click(() => {
  gameState.state = GameState.states.RUNNING;
});

// Pause button
$("#offCheck").click(() => {
  gameState.state = GameState.states.PAUSED;
});

// Random button
$("#randomFill").click(() => {
  game.random($("#fillChanceInput").val());
});
