import state from "../../../state";
import { SERVICE } from "../../nodeContants";
import { BaseNocalhostNode } from "../../types/nodeType";
import { NetworkResourceNode } from "../NetworkResourceNode";

export class Service extends NetworkResourceNode {
  type = SERVICE;
  public resourceType = "Service";
  constructor(
    public parent: BaseNocalhostNode,
    public label: string,
    public name: string,
    public info?: any
  ) {
    super();
    this.parent = parent;
    this.label = label;
    this.info = info;
    this.name = name;
    state.setNode(this.getNodeStateId(), this);
  }
}
