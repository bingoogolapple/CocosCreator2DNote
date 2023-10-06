import { _decorator, Component, Node, AudioClip, Event } from 'cc';
const { ccclass, property } = _decorator

import Scene9ResultDialog from "./Scene9ResultDialog"

@ccclass('Scene9')
export default class Scene9 extends Component {
  static inst: Scene9 = null
//  // 选项1，2，3，4 四个节点
  private optionNodes: Node[] = []
//  // 字库
  private charPool: string[] = [
    "大",
    "小",
    "多",
    "少",
    "哥",
    "弟",
    "姐",
    "妹",
    "爸",
    "妈",
    "爷",
    "奶",
    "天",
    "地",
    "日",
    "月",
    "春",
    "夏",
    "秋",
    "冬"
  ]
//  // 标准发音库
  private voicePool: AudioClip[] = null
//  // 当前答案
  private answer: string = null
  onLoad() {
        // Scene9.inst = this

        // for (let i = 0; i < 4; i++) {
        // let node: cc.Node = cc.find("Canvas/选项面板/选项" + (i + 1))
        // this.optionNodes.push(node)

        // node.on(cc.Node.EventType.TOUCH_START, this.onSelectOption, this)
        // }

//    // 加载标准发音资源
        // cc.resources.loadDir(
        // "audio/标准发音",
        // cc.AudioClip,
        // (err: Error, assets: cc.AudioClip[]) => {
        // this.voicePool = assets
        // this.nextRound()
        // }
        // )
  }
//  // 用户点击选择时的处理
  private onSelectOption(e: Event.EventTouch) {
        // let optionNode: cc.Node = e.target // 注意: e.Target 表示触发事件的最开始的那个节点
        // let label: cc.Label = optionNode.children[0].getComponent(cc.Label)
        // let value = label.string

        // let resultDialg: Scene9ResultDialog = cc
        // .find("Canvas/结果提示框")
        // .getComponent(Scene9ResultDialog)

        // if (value == this.answer) {
        // cc.log("答对了")
        // resultDialg.show(true)
        // } else {
        // cc.log("答错了")
        // resultDialg.show(false)
        // }
  }
  nextRound() {
        // this.answer = this.getRandomAnswer()
        // let options: string[] = this.getRandomOptions(this.answer)

        // for (let i = 0; i < 4; i++) {
        // let node: cc.Node = this.optionNodes[i]
        // let label: cc.Label = cc.find("文字", node).getComponent(cc.Label)
        // label.string = options[i]

        // node.angle = 0
        // cc.tween(node).to(1, { angle: -360 }, { easing: "cubicOut" }).start()
        // }

        // this.playVoice()
  }
  playVoice() {
        // let clip: cc.AudioClip = this.getVoiceClip(this.answer)
        // if (clip) {
        // cc.audioEngine.play(clip, false, 1)
        // }
  }
//  // 从发音库中，查找对应的发音资源
  private getVoiceClip(ch: string): AudioClip {
        // for (let i = 0; i < this.voicePool.length; i++) {
        // let clip: cc.AudioClip = this.voicePool[i]
        // if (ch === clip.name) {
        // return clip
        // }
        // }
        // return null
  }
//  // 从 20 个汉字里，获取一个随机值
  private getRandomAnswer(): string {
//    // 生成一个随机数: 介于 0, 1, ..., 19
//    // Math.random() 是一个小数 0.0 - 1.0
//    // Math.floor() 向下取整 4.139 -> 4
        // let index = Math.floor(Math.random() * this.charPool.length)
        // let str = this.charPool[index]
        // return str
  }
//  // 从 20 个汉字里，获取一组随机选项
  private getRandomOptions(value: string): string[] {
        // let result: string[] = []

        // result.push(value)
        // while (result.length < 4) {
        // let index = Math.floor(Math.random() * this.charPool.length)
        // let sel = this.charPool[index]
        // if (result.indexOf(sel) < 0) {
        // result.push(sel)
        // }
        // }

//    // 排序
        // result.sort()
        // return result
  }
}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// import Scene9ResultDialog from "./Scene9ResultDialog"
// 
// const { ccclass, property } = cc._decorator
// 
// @ccclass
// export default class Scene9 extends cc.Component {
//   static inst: Scene9 = null
//   // 选项1，2，3，4 四个节点
//   private optionNodes: cc.Node[] = []
//   // 字库
//   private charPool: string[] = [
//     "大",
//     "小",
//     "多",
//     "少",
//     "哥",
//     "弟",
//     "姐",
//     "妹",
//     "爸",
//     "妈",
//     "爷",
//     "奶",
//     "天",
//     "地",
//     "日",
//     "月",
//     "春",
//     "夏",
//     "秋",
//     "冬"
//   ]
//   // 标准发音库
//   private voicePool: cc.AudioClip[] = null
//   // 当前答案
//   private answer: string = null
// 
//   onLoad() {
//     Scene9.inst = this
// 
//     for (let i = 0; i < 4; i++) {
//       let node: cc.Node = cc.find("Canvas/选项面板/选项" + (i + 1))
//       this.optionNodes.push(node)
// 
//       node.on(cc.Node.EventType.TOUCH_START, this.onSelectOption, this)
//     }
// 
//     // 加载标准发音资源
//     cc.resources.loadDir(
//       "audio/标准发音",
//       cc.AudioClip,
//       (err: Error, assets: cc.AudioClip[]) => {
//         this.voicePool = assets
//         this.nextRound()
//       }
//     )
//   }
// 
//   // 用户点击选择时的处理
//   private onSelectOption(e: cc.Event.EventTouch) {
//     let optionNode: cc.Node = e.target // 注意: e.Target 表示触发事件的最开始的那个节点
//     let label: cc.Label = optionNode.children[0].getComponent(cc.Label)
//     let value = label.string
// 
//     let resultDialg: Scene9ResultDialog = cc
//       .find("Canvas/结果提示框")
//       .getComponent(Scene9ResultDialog)
// 
//     if (value == this.answer) {
//       cc.log("答对了")
//       resultDialg.show(true)
//     } else {
//       cc.log("答错了")
//       resultDialg.show(false)
//     }
//   }
// 
//   nextRound() {
//     this.answer = this.getRandomAnswer()
//     let options: string[] = this.getRandomOptions(this.answer)
// 
//     for (let i = 0; i < 4; i++) {
//       let node: cc.Node = this.optionNodes[i]
//       let label: cc.Label = cc.find("文字", node).getComponent(cc.Label)
//       label.string = options[i]
// 
//       node.angle = 0
//       cc.tween(node).to(1, { angle: -360 }, { easing: "cubicOut" }).start()
//     }
// 
//     this.playVoice()
//   }
// 
//   playVoice() {
//     let clip: cc.AudioClip = this.getVoiceClip(this.answer)
//     if (clip) {
//       cc.audioEngine.play(clip, false, 1)
//     }
//   }
// 
//   // 从发音库中，查找对应的发音资源
//   private getVoiceClip(ch: string): cc.AudioClip {
//     for (let i = 0; i < this.voicePool.length; i++) {
//       let clip: cc.AudioClip = this.voicePool[i]
//       if (ch === clip.name) {
//         return clip
//       }
//     }
//     return null
//   }
// 
//   // 从 20 个汉字里，获取一个随机值
//   private getRandomAnswer(): string {
//     // 生成一个随机数: 介于 0, 1, ..., 19
//     // Math.random() 是一个小数 0.0 - 1.0
//     // Math.floor() 向下取整 4.139 -> 4
//     let index = Math.floor(Math.random() * this.charPool.length)
//     let str = this.charPool[index]
//     return str
//   }
// 
//   // 从 20 个汉字里，获取一组随机选项
//   private getRandomOptions(value: string): string[] {
//     let result: string[] = []
// 
//     result.push(value)
//     while (result.length < 4) {
//       let index = Math.floor(Math.random() * this.charPool.length)
//       let sel = this.charPool[index]
//       if (result.indexOf(sel) < 0) {
//         result.push(sel)
//       }
//     }
// 
//     // 排序
//     result.sort()
//     return result
//   }
// }
