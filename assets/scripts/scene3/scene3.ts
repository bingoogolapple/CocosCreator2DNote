const { ccclass, property } = cc._decorator

@ccclass
export default class Scene3 extends cc.Component {
  onBtnClick(target: cc.Event.EventTouch, data: string) {
    cc.log(target)
    if (data === "open-scene1") {
      cc.director.loadScene("scene1")
    }
  }
}
