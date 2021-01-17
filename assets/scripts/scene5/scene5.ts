const { ccclass, property } = cc._decorator

@ccclass
export default class Scene5 extends cc.Component {
  onBtnClick(target: cc.Event.EventTouch, data: string) {
    if (data === "end") {
      let tipDialog: cc.Node = cc.find("Canvas/提示框")
      tipDialog.active = true
    }
  }
}
