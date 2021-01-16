import MagazineComponent from "./MagazineComponent"
import ResultDialog from "./ResultDialog"

const { ccclass, property } = cc._decorator

/**
 * 挂载到【其他/游戏初始化】
 */
@ccclass
export default class Common extends cc.Component {
  static magazine: MagazineComponent = null
  // 得分统计
  static score: number = 0
  // 结果提示框
  static resultDialog: ResultDialog = null

  onLoad() {
    Common.magazine = cc.find("Canvas/弹仓").getComponent("MagazineComponent")
    Common.resultDialog = cc
      .find("Canvas/结果提示框")
      .getComponent("ResultDialog")
  }

  static resetGame() {
    Common.score = 0
    Common.magazine.reset()
  }
}
