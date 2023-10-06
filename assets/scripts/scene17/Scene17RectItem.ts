import { _decorator, Component, Node, Sprite, Label } from 'cc';
const { ccclass, property } = _decorator

@ccclass('Scene17RectItem')
export default class Scene17Game extends Component {
  flag: Node | null = null
  icon: Sprite | null = null
  label: Label | null = null
  onLoad() {
        // this.flag = cc.find("flag", this.node)
        // this.icon = cc.find("icon", this.node).getComponent(cc.Sprite)
        // this.label = cc.find("label", this.node).getComponent(cc.Label)
  }
}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// const { ccclass, property } = cc._decorator
// 
// @ccclass
// export default class Scene17Game extends cc.Component {
//   flag: cc.Node = null
//   icon: cc.Sprite = null
//   label: cc.Label = null
// 
//   onLoad() {
//     this.flag = cc.find("flag", this.node)
//     this.icon = cc.find("icon", this.node).getComponent(cc.Sprite)
//     this.label = cc.find("label", this.node).getComponent(cc.Label)
//   }
// }
