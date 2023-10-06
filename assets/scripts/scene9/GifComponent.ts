import { _decorator, Component, SpriteFrame, Sprite } from 'cc';
const { ccclass, property } = _decorator

@ccclass('GifComponent')
export default class GifComponent extends Component {
  @property([SpriteFrame])
  frames: SpriteFrame[] = []
  @property
  interval: number = 100 // ms
  @property
  loop: boolean = false
  @property
  playOnLoad: boolean = false
  index: number = 0
  times: number = 0 // 已经播了几轮
  totalTimes: number = 1 // 一共需要播几轮
  sprite: Sprite | null = null
  staticFrame: SpriteFrame | null = null // 初始图片显示
  onLoad() {
        // this.sprite = this.node.getComponent(cc.Sprite)
        // this.staticFrame = this.sprite.spriteFrame

        // if (this.playOnLoad) {
        // this.playGif()
        // }
  }
  playGif() {
        // this.times = 0
        // this.totalTimes = 1

        // if (this.loop) {
        // this.schedule(
        // this.onTimer,
        // this.interval / 1000,
        // cc.macro.REPEAT_FOREVER,
        // 0.1
        // )
        // } else {
        // this.schedule(this.onTimer, this.interval / 1000, this.frames.length, 0.1)
        // }
  }
  stopGif() {
        // this.unschedule(this.onTimer)
        // this.sprite.spriteFrame = this.staticFrame
  }
  onTimer() {
        // this.sprite.spriteFrame = this.frames[this.index]
        // this.index++

        // if (this.index >= this.frames.length) {
        // this.index = 0
        // this.times++
        // if (!this.loop && this.times >= this.totalTimes) {
//        // 既然不是循环播放，那么可以停止了
        // this.stopGif()
        // }
        // }
  }
}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// const { ccclass, property } = cc._decorator
// 
// @ccclass
// export default class GifComponent extends cc.Component {
//   @property([cc.SpriteFrame])
//   frames: cc.SpriteFrame[] = []
//   @property
//   interval: number = 100 // ms
//   @property
//   loop: boolean = false
//   @property
//   playOnLoad: boolean = false
// 
//   index: number = 0
//   times: number = 0 // 已经播了几轮
//   totalTimes: number = 1 // 一共需要播几轮
// 
//   sprite: cc.Sprite = null
//   staticFrame: cc.SpriteFrame = null // 初始图片显示
// 
//   onLoad() {
//     this.sprite = this.node.getComponent(cc.Sprite)
//     this.staticFrame = this.sprite.spriteFrame
// 
//     if (this.playOnLoad) {
//       this.playGif()
//     }
//   }
// 
//   playGif() {
//     this.times = 0
//     this.totalTimes = 1
// 
//     if (this.loop) {
//       this.schedule(
//         this.onTimer,
//         this.interval / 1000,
//         cc.macro.REPEAT_FOREVER,
//         0.1
//       )
//     } else {
//       this.schedule(this.onTimer, this.interval / 1000, this.frames.length, 0.1)
//     }
//   }
// 
//   stopGif() {
//     this.unschedule(this.onTimer)
//     this.sprite.spriteFrame = this.staticFrame
//   }
// 
//   onTimer() {
//     this.sprite.spriteFrame = this.frames[this.index]
//     this.index++
// 
//     if (this.index >= this.frames.length) {
//       this.index = 0
//       this.times++
//       if (!this.loop && this.times >= this.totalTimes) {
//         // 既然不是循环播放，那么可以停止了
//         this.stopGif()
//       }
//     }
//   }
// }
