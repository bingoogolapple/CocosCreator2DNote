const { ccclass, property } = cc._decorator
import Scene12Game from "./Scene12Game"

@ccclass
export default class Scene12Welcome extends cc.Component {
  onLoad() {
    this.node
      .getChildByName("开始游戏")
      .on(cc.Node.EventType.TOUCH_START, () => {
        this.node.active = false
        Scene12Game.instance.startGame()
      })
  }
}
