import { _decorator, Component } from 'cc';
const { ccclass, property } = _decorator

@ccclass('OpenScenePrefab')
export default class OpenScenePrefab extends Component {
  scenePostfix: number = 2
  onLoad() {
        // this.getComponentInChildren(
        // cc.Label
        // ).string = `打开场景${this.scenePostfix}`
        // var eventHandler = new cc.Component.EventHandler()
        // eventHandler.target = this.node
        // eventHandler.component = "OpenScenePrefab"
        // eventHandler.handler = "openScene"
        // this.getComponent(cc.Button).clickEvents = [eventHandler]
  }
  openScene() {
        // cc.director.loadScene(`scene${this.scenePostfix}`)
  }
}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// const { ccclass, property } = cc._decorator
// 
// @ccclass
// export default class OpenScenePrefab extends cc.Component {
//   scenePostfix: number = 2
// 
//   onLoad() {
//     this.getComponentInChildren(
//       cc.Label
//     ).string = `打开场景${this.scenePostfix}`
//     var eventHandler = new cc.Component.EventHandler()
//     eventHandler.target = this.node
//     eventHandler.component = "OpenScenePrefab"
//     eventHandler.handler = "openScene"
//     this.getComponent(cc.Button).clickEvents = [eventHandler]
//   }
// 
//   openScene() {
//     cc.director.loadScene(`scene${this.scenePostfix}`)
//   }
// }
