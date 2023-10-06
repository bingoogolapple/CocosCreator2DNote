import { _decorator, Component } from 'cc';
const { ccclass, property } = _decorator

import Scene12Game from "./Scene12Game"

@ccclass('Scene12Welcome')
export default class Scene12Welcome extends Component {
  onLoad() {
        // this.node
        // .getChildByName("开始游戏")
        // .on(cc.Node.EventType.TOUCH_START, () => {
        // this.node.active = false
        // Scene12Game.instance.startGame()
        // })
  }
}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// const { ccclass, property } = cc._decorator
// import Scene12Game from "./Scene12Game"
// 
// @ccclass
// export default class Scene12Welcome extends cc.Component {
//   onLoad() {
//     this.node
//       .getChildByName("开始游戏")
//       .on(cc.Node.EventType.TOUCH_START, () => {
//         this.node.active = false
//         Scene12Game.instance.startGame()
//       })
//   }
// }
