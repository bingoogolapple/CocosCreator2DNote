import { _decorator, Component, SpriteAtlas, SpriteFrame, Sprite } from 'cc';
const { ccclass, property } = _decorator

@ccclass('GifAndAtlasPlayer')
export default class GifAndAltasPlayer extends Component {
  @property(SpriteAtlas)
  atlas: SpriteAtlas | null = null
//  //   @property([cc.SpriteFrame])
//  //   frames: cc.SpriteFrame[] = []
  @property([SpriteFrame])
  frames: SpriteFrame[] = new Array()
  sprite: Sprite | null = null // Sprite组件
  index: number = 0 // 当前显示第N张图片
  interval: number = 0.1 // 定时器的间隔
  onLoad() {
        // this.sprite = this.getComponent(cc.Sprite)

        // if (this.atlas) {
        // this.frames = this.atlas.getSpriteFrames()
        // }
  }
  start() {
        // this.schedule(this.onTimer, this.interval)
  }
  onTimer() {
        // if (this.frames.length == 0) {
        // return
        // }

        // this.sprite.spriteFrame = this.frames[this.index]

//    // 下一帧
        // this.index++
        // if (this.index >= this.frames.length) {
        // this.index = 0
        // }
  }
  onDestroy() {
        // this.unschedule(this.onTimer)
  }
}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// const { ccclass, property } = cc._decorator
// 
// @ccclass
// export default class GifAndAltasPlayer extends cc.Component {
//   @property(cc.SpriteAtlas)
//   atlas: cc.SpriteAtlas = null
// 
//   //   @property([cc.SpriteFrame])
//   //   frames: cc.SpriteFrame[] = []
//   @property([cc.SpriteFrame])
//   frames: cc.SpriteFrame[] = new Array()
// 
//   sprite: cc.Sprite = null // Sprite组件
//   index: number = 0 // 当前显示第N张图片
//   interval: number = 0.1 // 定时器的间隔
// 
//   onLoad() {
//     this.sprite = this.getComponent(cc.Sprite)
// 
//     if (this.atlas) {
//       this.frames = this.atlas.getSpriteFrames()
//     }
//   }
// 
//   start() {
//     this.schedule(this.onTimer, this.interval)
//   }
// 
//   onTimer() {
//     if (this.frames.length == 0) {
//       return
//     }
// 
//     this.sprite.spriteFrame = this.frames[this.index]
// 
//     // 下一帧
//     this.index++
//     if (this.index >= this.frames.length) {
//       this.index = 0
//     }
//   }
// 
//   onDestroy() {
//     this.unschedule(this.onTimer)
//   }
// }
