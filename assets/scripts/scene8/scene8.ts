const { ccclass, property } = cc._decorator

@ccclass
export default class Scene8 extends cc.Component {
  onBtnClick(target: cc.Event.EventTouch, data: string) {
    if (data === "open-scene1") {
      cc.director.loadScene("scene1")
    }
  }
}
