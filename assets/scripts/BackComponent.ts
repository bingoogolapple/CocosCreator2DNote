import { _decorator, Component } from 'cc';
const { ccclass, property } = _decorator

@ccclass('BackComponent')
export default class NewClass extends Component {
  backScene1() {
        // cc.director.loadScene("scene1")
  }
}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// const { ccclass, property } = cc._decorator
// 
// @ccclass
// export default class NewClass extends cc.Component {
//   backScene1() {
//     cc.director.loadScene("scene1")
//   }
// }
