export class UTFMessage {
  public action: string;
  public payload: object;
  constructor(action: string, payload: object) {
    this.action = action;
    this.payload = payload;
  }
}

export class TeamsDevtoolsHook extends EventTarget {
  private name: string;
  constructor() {
    super();
    this.name = "Teams Devtools global hook";
  }
}
