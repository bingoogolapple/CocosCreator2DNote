import { _decorator, Component, SpriteFrame, AudioClip, Sprite, Event } from 'cc';
const { ccclass, property } = _decorator

@ccclass('Scene4')
export default class Scene4 extends Component {
//  // 当前脸的朝向 : true, 脸朝左 ; false, 脸朝右
  faceLeft: boolean = true
//  // 两种状态的图片帧
  @property(SpriteFrame)
  faceLeftFrame: SpriteFrame | null = null
  @property(SpriteFrame)
  faceRightFrame: SpriteFrame | null = null
//  // 脚步声
  @property(AudioClip)
  audio: AudioClip | null = null
  peiqiSprite: Sprite | null = null
  onLoad() {
        // this.peiqiSprite = this.node.getChildByName("佩奇").getComponent(cc.Sprite)
        // cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this)
  }
  onKeyDown(evt: Event.EventKeyboard) {
        // if (evt.keyCode == cc.macro.KEY.left) {
        // this.moveLeft()
        // } else if (evt.keyCode == cc.macro.KEY.right) {
        // this.moveRight()
        // }
  }
  onBtnClick(target: Event.EventTouch, data: string) {
        // if (data == "left") {
        // this.moveLeft()
        // } else if (data == "right") {
        // this.moveRight()
        // }
  }
  moveLeft() {
        // if (!this.faceLeft) {
        // this.faceLeft = true
        // this.changeFace() // 改变脸的朝向
        // }
        // this.move() // 移动一步
  }
  moveRight() {
        // if (this.faceLeft) {
        // this.faceLeft = false
        // this.changeFace() // 改变脸的朝向
        // }
        // this.move() // 移动一步
  }
  move() {
        // if (this.faceLeft) {
        // this.peiqiSprite.node.x -= 10
        // } else {
        // this.peiqiSprite.node.x += 10
        // }

//    // 播放脚步声音频
        // if (this.audio) {
        // cc.audioEngine.play(this.audio, false, 1)
        // }
  }
//  // 改变脸的朝向
  changeFace() {
//    // 通过 scaleX 来水平方向翻转
//    // this.node.scaleX = 0 - this.node.scaleX;

//    // 针对不同状态，显示相应的图片
        // if (this.faceLeft) {
        // this.peiqiSprite.spriteFrame = this.faceLeftFrame
        // } else {
        // this.peiqiSprite.spriteFrame = this.faceRightFrame
        // }
  }
}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// const { ccclass, property } = cc._decorator
// 
// @ccclass
// export default class Scene4 extends cc.Component {
//   // 当前脸的朝向 : true, 脸朝左 ; false, 脸朝右
//   faceLeft: boolean = true
//   // 两种状态的图片帧
//   @property(cc.SpriteFrame)
//   faceLeftFrame: cc.SpriteFrame = null
//   @property(cc.SpriteFrame)
//   faceRightFrame: cc.SpriteFrame = null
//   // 脚步声
//   @property(cc.AudioClip)
//   audio: cc.AudioClip = null
// 
//   peiqiSprite: cc.Sprite = null
// 
//   onLoad() {
//     this.peiqiSprite = this.node.getChildByName("佩奇").getComponent(cc.Sprite)
//     cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this)
//   }
// 
//   onKeyDown(evt: cc.Event.EventKeyboard) {
//     if (evt.keyCode == cc.macro.KEY.left) {
//       this.moveLeft()
//     } else if (evt.keyCode == cc.macro.KEY.right) {
//       this.moveRight()
//     }
//   }
// 
//   onBtnClick(target: cc.Event.EventTouch, data: string) {
//     if (data == "left") {
//       this.moveLeft()
//     } else if (data == "right") {
//       this.moveRight()
//     }
//   }
// 
//   moveLeft() {
//     if (!this.faceLeft) {
//       this.faceLeft = true
//       this.changeFace() // 改变脸的朝向
//     }
//     this.move() // 移动一步
//   }
// 
//   moveRight() {
//     if (this.faceLeft) {
//       this.faceLeft = false
//       this.changeFace() // 改变脸的朝向
//     }
//     this.move() // 移动一步
//   }
// 
//   move() {
//     if (this.faceLeft) {
//       this.peiqiSprite.node.x -= 10
//     } else {
//       this.peiqiSprite.node.x += 10
//     }
// 
//     // 播放脚步声音频
//     if (this.audio) {
//       cc.audioEngine.play(this.audio, false, 1)
//     }
//   }
// 
//   // 改变脸的朝向
//   changeFace() {
//     // 通过 scaleX 来水平方向翻转
//     // this.node.scaleX = 0 - this.node.scaleX;
// 
//     // 针对不同状态，显示相应的图片
//     if (this.faceLeft) {
//       this.peiqiSprite.spriteFrame = this.faceLeftFrame
//     } else {
//       this.peiqiSprite.spriteFrame = this.faceRightFrame
//     }
//   }
// }
