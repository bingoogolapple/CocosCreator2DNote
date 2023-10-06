import { _decorator, Component, Event } from 'cc';
const { ccclass, property } = _decorator

@ccclass('Scene5')
export default class Scene5 extends Component {
  onBtnClick(target: Event.EventTouch, data: string) {
        // if (data === "end") {
        // let tipDialog: cc.Node = cc.find("Canvas/提示框")
        // tipDialog.active = true
        // }
  }
}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// const { ccclass, property } = cc._decorator
// 
// @ccclass
// export default class Scene5 extends cc.Component {
//   onBtnClick(target: cc.Event.EventTouch, data: string) {
//     if (data === "end") {
//       let tipDialog: cc.Node = cc.find("Canvas/提示框")
//       tipDialog.active = true
//     }
//   }
// }
