import { _decorator, Component, Prefab, Node, Label } from 'cc';
const { ccclass, property } = _decorator

import Scene15Ball from "./Scene15Ball"

@ccclass('Scene15Game')
export default class Scene15Game extends Component {
  private static readonly MAX_TIME: number = 10
  private static readonly MAX_LEVEL: number = 4
  @property(Prefab)
  ballPrefab: Prefab | null = null
  @property(Node)
  ctrlAreaNode: Node | null = null
  @property(Label)
  hintLabel: Label | null = null
  ballNodeArr: Node[] = []
  level: number = 1
  now: number = 0
  isGameOver: boolean = false
  onLoad() {
        // this.hintLabel.node.on(cc.Node.EventType.TOUCH_START, this.replay, this)
        // this.initMap()
  }
  replay() {
        // if (this.isGameOver) {
        // this.initMap()
        // }
  }
  initMap() {
        // let ballCount = this.level * 4
        // let typeCount = this.level + 1
        // for (let i = 0; i < ballCount; i++) {
        // let ballNode = this.ballNodeArr[i]
        // if (!ballNode) {
        // ballNode = cc.instantiate(this.ballPrefab)
        // this.ctrlAreaNode.addChild(ballNode)
        // this.ballNodeArr.push(ballNode)
        // }
        // let ball: Scene15Ball = ballNode.getComponent("Scene15Ball")
        // ball.randomBall(typeCount)
        // }
        // this.now = 0
        // this.isGameOver = false

        // if (this.isOver()) {
        // this.initMap()
        // }
  }
  update(dt: number) {
        // this.now += dt
        // let resetTime = Math.floor(Scene15Game.MAX_TIME - this.now)
        // if (resetTime <= 0) {
        // this.hintLabel.string = "时间到，游戏结束！点击重新开始"
        // this.isGameOver = true
        // } else {
        // this.hintLabel.string = `level:${this.level}, time: ${resetTime}s`
        // }
  }
  checkOver() {
        // if (this.isOver()) {
        // this.levelUp()
        // }
  }
  private isOver(): boolean {
        // let firstName: string
        // let currentName: string
        // for (let i = 0; i < this.ballNodeArr.length; i++) {
        // currentName = this.ballNodeArr[i].getComponent(cc.Sprite).spriteFrame.name
        // if (i == 0) {
        // firstName = currentName
        // continue
        // }

        // if (currentName !== firstName) {
        // return false
        // }
        // }
        // return true
  }
  levelUp() {
        // this.level++
        // if (this.level > Scene15Game.MAX_LEVEL) {
        // this.level = Scene15Game.MAX_LEVEL
        // }

        // this.initMap()
  }
}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// const { ccclass, property } = cc._decorator
// import Scene15Ball from "./Scene15Ball"
// 
// @ccclass
// export default class Scene15Game extends cc.Component {
//   private static readonly MAX_TIME: number = 10
//   private static readonly MAX_LEVEL: number = 4
//   @property(cc.Prefab)
//   ballPrefab: cc.Prefab = null
//   @property(cc.Node)
//   ctrlAreaNode: cc.Node = null
//   @property(cc.Label)
//   hintLabel: cc.Label = null
//   ballNodeArr: cc.Node[] = []
//   level: number = 1
//   now: number = 0
//   isGameOver: boolean = false
// 
//   onLoad() {
//     this.hintLabel.node.on(cc.Node.EventType.TOUCH_START, this.replay, this)
//     this.initMap()
//   }
// 
//   replay() {
//     if (this.isGameOver) {
//       this.initMap()
//     }
//   }
// 
//   initMap() {
//     let ballCount = this.level * 4
//     let typeCount = this.level + 1
//     for (let i = 0; i < ballCount; i++) {
//       let ballNode = this.ballNodeArr[i]
//       if (!ballNode) {
//         ballNode = cc.instantiate(this.ballPrefab)
//         this.ctrlAreaNode.addChild(ballNode)
//         this.ballNodeArr.push(ballNode)
//       }
//       let ball: Scene15Ball = ballNode.getComponent("Scene15Ball")
//       ball.randomBall(typeCount)
//     }
//     this.now = 0
//     this.isGameOver = false
// 
//     if (this.isOver()) {
//       this.initMap()
//     }
//   }
// 
//   update(dt: number) {
//     this.now += dt
//     let resetTime = Math.floor(Scene15Game.MAX_TIME - this.now)
//     if (resetTime <= 0) {
//       this.hintLabel.string = "时间到，游戏结束！点击重新开始"
//       this.isGameOver = true
//     } else {
//       this.hintLabel.string = `level:${this.level}, time: ${resetTime}s`
//     }
//   }
// 
//   checkOver() {
//     if (this.isOver()) {
//       this.levelUp()
//     }
//   }
// 
//   private isOver(): boolean {
//     let firstName: string
//     let currentName: string
//     for (let i = 0; i < this.ballNodeArr.length; i++) {
//       currentName = this.ballNodeArr[i].getComponent(cc.Sprite).spriteFrame.name
//       if (i == 0) {
//         firstName = currentName
//         continue
//       }
// 
//       if (currentName !== firstName) {
//         return false
//       }
//     }
//     return true
//   }
// 
//   levelUp() {
//     this.level++
//     if (this.level > Scene15Game.MAX_LEVEL) {
//       this.level = Scene15Game.MAX_LEVEL
//     }
// 
//     this.initMap()
//   }
// }
