const { ccclass, property } = cc._decorator

@ccclass
export default class Scene17Game extends cc.Component {
  flag: cc.Node = null
  icon: cc.Sprite = null
  label: cc.Label = null

  onLoad() {
    this.flag = cc.find("flag", this.node)
    this.icon = cc.find("icon", this.node).getComponent(cc.Sprite)
    this.label = cc.find("label", this.node).getComponent(cc.Label)
  }
}
