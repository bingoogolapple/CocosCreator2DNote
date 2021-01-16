import Scene9 from "./scene9"

const { ccclass, property } = cc._decorator

@ccclass
export default class Scene9ResultDialog extends cc.Component {
  @property(cc.AudioClip)
  audioOK: cc.AudioClip = null
  @property(cc.AudioClip)
  audioBad: cc.AudioClip = null
  @property(cc.SpriteFrame)
  imageOK: cc.SpriteFrame = null
  @property(cc.SpriteFrame)
  imageBad: cc.SpriteFrame = null

  // true: 答对了; false, 答错了
  show(ok: boolean) {
    let cupNode: cc.Node = cc.find("图片", this.node)
    let sprite: cc.Sprite = cupNode.getComponent(cc.Sprite)

    let audioId: number = null
    if (ok) {
      sprite.spriteFrame = this.imageOK
      audioId = cc.audioEngine.play(this.audioOK, false, 1)
    } else {
      sprite.spriteFrame = this.imageBad
      audioId = cc.audioEngine.play(this.audioBad, false, 1)
    }

    this.node.active = true

    // 加一个缓动效果
    cupNode.scale = 0.5
    cc.tween(cupNode).to(0.5, { scale: 2 }, { easing: "cubicOut" }).start()

    cc.audioEngine.setFinishCallback(audioId, () => {
      this.hide()
      Scene9.inst.nextRound()
    })
  }

  private hide() {
    this.node.active = false
  }
}
