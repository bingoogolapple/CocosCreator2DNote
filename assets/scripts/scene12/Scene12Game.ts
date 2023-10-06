import { _decorator, Component, Prefab, NodePool, Node } from 'cc';
const { ccclass, property } = _decorator

import Scene12ResultDialog from "./Scene12ResultDialog"

@ccclass('Scene12Game')
export default class Scene12Game extends Component {
  static instance: Scene12Game = null
//  // 游戏是定高设计 Fit Height，所以高度固定为 1280
  static gameHeight: number = 1280
//  // 子弹 Prefab
  @property(Prefab)
  bulletPrefab: Prefab | null = null
//  // 子弹对象池
  bulletPool: NodePool = new NodePool()
//  // 目标prefab
  @property(Prefab)
  targetPrefab: Prefab | null = null
//  // 目标对象池
  targetPool: NodePool = new NodePool()
//  // 游戏是否进行中
  playing: boolean = false
//  // Canvas 节点
  canvas: Node | null = null
//  // 结果提示框
  resultDialog: Scene12ResultDialog = null
  onLoad() {
        // Scene12Game.instance = this

        // let manager = cc.director.getCollisionManager()
        // manager.enabled = true
//    // manager.enabledDebugDraw = true

        // this.canvas = cc.find("Canvas")
        // this.resultDialog = cc
        // .find("Canvas/结果提示框")
        // .getComponent(Scene12ResultDialog)
  }
//  /**
//   * 开始游戏
//   */
  startGame() {
        // this.playing = true
//    // 延迟 0.1 后开始每隔 3 秒创建目标
        // this.schedule(this.onCreatingTarget, 3, cc.macro.REPEAT_FOREVER, 0.1)
//    // 播放背景音乐
        // let bgm: cc.AudioSource = this.node.getComponent(cc.AudioSource)
        // bgm.play()
  }
//  /**
//   * 结束游戏
//   */
  endGame() {
        // this.playing = false
//    // 停止创建目标的定时任务
        // this.unschedule(this.onCreatingTarget)
//    // 清理屏幕
        // this.clearScreen()

//    // 显示结果提示框
        // this.resultDialog.show()

//    // 停止背景音乐
        // let bgm: cc.AudioSource = this.node.getComponent(cc.AudioSource)
        // bgm.stop()
  }
  clearScreen() {
        // let nodes: cc.Node[] = this.canvas.children
        // for (let i = nodes.length - 1; i >= 0; i--) {
        // let node = nodes[i]
        // if (node.name === "子弹") {
        // this.destroyBullet(node)
        // } else if (node.name === "目标") {
        // this.destroyTarget(node)
        // }
        // }
  }
//  // 从对象池创建子弹
  createBullet() {
        // let node = this.bulletPool.get()
        // if (node == null) {
        // node = cc.instantiate(this.bulletPrefab)
        // }
        // return node
  }
//  // 回收子弹到对象池
  destroyBullet(node: Node) {
        // this.bulletPool.put(node)
  }
//  // 创建目标
  createTarget() {
        // let node = this.targetPool.get()
        // if (node == null) {
        // node = cc.instantiate(this.targetPrefab)
        // }
        // return node
  }
//  // 销毁目标
  destroyTarget(node: Node) {
        // this.targetPool.put(node)
  }
//  // 定时创建目标
  onCreatingTarget() {
//    // 每排最少创建 1 个方块，最多创建 4 个
        // let retainIndex: number = Math.floor(Math.random() * 4)
        // for (let i = 0; i < 4; i++) {
        // let flag = Math.floor(Math.random() * 2)
        // if (flag == 0 && i != retainIndex) {
//        // flag 为 0，且该位置不为保留位置，忽略该位置
        // continue
        // }

        // let targetNode: cc.Node = this.createTarget()
        // targetNode.parent = this.canvas

        // let w = this.canvas.width
        // let h = this.canvas.height
        // let unit = w / 4
        // targetNode.x = -w / 2 + w / 8 + unit * i
        // targetNode.y = h / 2 + targetNode.height / 2
        // }
  }
}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// const { ccclass, property } = cc._decorator
// import Scene12ResultDialog from "./Scene12ResultDialog"
// 
// @ccclass
// export default class Scene12Game extends cc.Component {
//   static instance: Scene12Game = null
//   // 游戏是定高设计 Fit Height，所以高度固定为 1280
//   static gameHeight: number = 1280
//   // 子弹 Prefab
//   @property(cc.Prefab)
//   bulletPrefab: cc.Prefab = null
//   // 子弹对象池
//   bulletPool: cc.NodePool = new cc.NodePool()
// 
//   // 目标prefab
//   @property(cc.Prefab)
//   targetPrefab: cc.Prefab = null
//   // 目标对象池
//   targetPool: cc.NodePool = new cc.NodePool()
// 
//   // 游戏是否进行中
//   playing: boolean = false
//   // Canvas 节点
//   canvas: cc.Node = null
//   // 结果提示框
//   resultDialog: Scene12ResultDialog = null
// 
//   onLoad() {
//     Scene12Game.instance = this
// 
//     let manager = cc.director.getCollisionManager()
//     manager.enabled = true
//     // manager.enabledDebugDraw = true
// 
//     this.canvas = cc.find("Canvas")
//     this.resultDialog = cc
//       .find("Canvas/结果提示框")
//       .getComponent(Scene12ResultDialog)
//   }
// 
//   /**
//    * 开始游戏
//    */
//   startGame() {
//     this.playing = true
//     // 延迟 0.1 后开始每隔 3 秒创建目标
//     this.schedule(this.onCreatingTarget, 3, cc.macro.REPEAT_FOREVER, 0.1)
//     // 播放背景音乐
//     let bgm: cc.AudioSource = this.node.getComponent(cc.AudioSource)
//     bgm.play()
//   }
// 
//   /**
//    * 结束游戏
//    */
//   endGame() {
//     this.playing = false
//     // 停止创建目标的定时任务
//     this.unschedule(this.onCreatingTarget)
//     // 清理屏幕
//     this.clearScreen()
// 
//     // 显示结果提示框
//     this.resultDialog.show()
// 
//     // 停止背景音乐
//     let bgm: cc.AudioSource = this.node.getComponent(cc.AudioSource)
//     bgm.stop()
//   }
// 
//   clearScreen() {
//     let nodes: cc.Node[] = this.canvas.children
//     for (let i = nodes.length - 1; i >= 0; i--) {
//       let node = nodes[i]
//       if (node.name === "子弹") {
//         this.destroyBullet(node)
//       } else if (node.name === "目标") {
//         this.destroyTarget(node)
//       }
//     }
//   }
// 
//   // 从对象池创建子弹
//   createBullet() {
//     let node = this.bulletPool.get()
//     if (node == null) {
//       node = cc.instantiate(this.bulletPrefab)
//     }
//     return node
//   }
// 
//   // 回收子弹到对象池
//   destroyBullet(node: cc.Node) {
//     this.bulletPool.put(node)
//   }
// 
//   // 创建目标
//   createTarget() {
//     let node = this.targetPool.get()
//     if (node == null) {
//       node = cc.instantiate(this.targetPrefab)
//     }
//     return node
//   }
// 
//   // 销毁目标
//   destroyTarget(node: cc.Node) {
//     this.targetPool.put(node)
//   }
// 
//   // 定时创建目标
//   onCreatingTarget() {
//     // 每排最少创建 1 个方块，最多创建 4 个
//     let retainIndex: number = Math.floor(Math.random() * 4)
//     for (let i = 0; i < 4; i++) {
//       let flag = Math.floor(Math.random() * 2)
//       if (flag == 0 && i != retainIndex) {
//         // flag 为 0，且该位置不为保留位置，忽略该位置
//         continue
//       }
// 
//       let targetNode: cc.Node = this.createTarget()
//       targetNode.parent = this.canvas
// 
//       let w = this.canvas.width
//       let h = this.canvas.height
//       let unit = w / 4
//       targetNode.x = -w / 2 + w / 8 + unit * i
//       targetNode.y = h / 2 + targetNode.height / 2
//     }
//   }
// }
