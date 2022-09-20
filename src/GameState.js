class GameState {
  constructor(state = GameState.states.PAUSED) {
    this.state = state;
  }

  triggerState = () =>
    (this.state =
      this.state === this.states.RUNNING
        ? this.state.PAUSED
        : this.state.RUNNING);

  checkState = () => {
    if (document.getElementById("onCheck").checked) {
      this.state = GameState.states.RUNNING;
    }
    if (document.getElementById("offCheck").checked) {
      this.state = GameState.states.PAUSED;
    }
  };

  static states = {
    RUNNING: "RUNNING",
    PAUSED: "PAUSED",
  };
}
