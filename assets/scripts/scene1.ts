const { ccclass, property } = cc._decorator

@ccclass
export default class Scene1 extends cc.Component {
  @property(cc.Sprite)
  bgSprite: cc.Sprite
  @property(cc.SpriteFrame)
  bgFrame1: cc.SpriteFrame
  bgFrame2: cc.SpriteFrame
  bgFrame3: cc.SpriteFrame
  infoLabel: cc.Label
  @property(cc.ProgressBar)
  progressBar: cc.ProgressBar

  onLoad() {
    cc.log("onLoad")
    this.infoLabel = this.node.getChildByName("info").getComponent(cc.Label)
    this.progressBar.progress = 0
  }

  start() {
    cc.log("start")
  }

  // 1s 执行 60 次
  update(dt: number) {
    let progress = this.progressBar.progress + dt / 5
    if (progress >= 1) {
      progress = 0
    }
    this.progressBar.progress = progress
  }

  onBtnClick(target: cc.Event.EventTouch, data: string) {
    if (data === "bg1") {
      cc.log("使用背景1，直接拖拽")
      this.bgSprite.spriteFrame = this.bgFrame1
    } else if (data == "bg2") {
      cc.log("使用背景2，加载本地图片")
      if (this.bgFrame2) {
        this.bgSprite.spriteFrame = this.bgFrame2
      } else {
        /**
         * 1、如果不在代码里加载资源，一般不要放到 assets/resources 文件夹下，否则即使后续没有用该资源也会被打包到发布包中
         * 2、代码里加载资源必须要求资源在 assets/resources 文件夹下，代码里加载时省去 assets/resources 前缀
         */
        cc.loader.loadRes(
          "img/bg2",
          cc.SpriteFrame,
          (error: Error, resource: cc.SpriteFrame) => {
            if (error) {
              cc.log("加载本地图片失败", error)
              return
            }
            // 方式1：直接赋值
            // this.bgFrame2 = resource

            // 方式2：加载成功后可以通过 cc.loader.getRes 方法直接获取。游戏在进入下一个场景之前提前加载资源，打开下一个场景后就能通过 cc.loader.getRes 直接获取
            this.bgFrame2 = cc.loader.getRes("img/bg2", cc.SpriteFrame)
            this.bgSprite.spriteFrame = this.bgFrame2
          }
        )
      }
    } else if (data == "bg3") {
      cc.log("使用背景3，加载远程图片")
      if (this.bgFrame3) {
        this.bgSprite.spriteFrame = this.bgFrame3
      } else {
        cc.loader.load(
          "http://bgashare.bingoogolapple.cn/banner/imgs/17.png",
          (error: Error, resource: cc.Texture2D) => {
            if (error) {
              cc.log("加载远程图片失败", error)
              return
            }
            this.bgFrame3 = new cc.SpriteFrame(resource)
            this.bgSprite.spriteFrame = this.bgFrame3
            // 设置为图片大小
            // this.bgSprite.node.setContentSize(resource.width, resource.height)
          }
        )
      }
    } else if (data === "remote-json") {
      cc.loader.load(
        {
          url: "http://bgashare.bingoogolapple.cn/banner/api/4item.json",
          type: "json"
        },
        (error: Error, rect: { imgs: String[]; tips: String[] }) => {
          if (error) {
            cc.log("加载远程 json 失败", error)
            return
          }
          cc.log(rect)
        }
      )
    } else if (data === "update-font") {
      cc.log("修改字体大小")
      this.infoLabel.fontSize++
    }
  }

  onDestroy() {
    /**
     * 1、每个场景有个「自动释放资源」选项，默认不勾选。勾选上后切换场景时会自动释放资源
     * 2、即使勾选了自动释放资源，切换场景时代码里加载的资源也不会自动释放。除非 cc.loader.setAutoRelease(url, true)
     */
    cc.loader.releaseRes("img/bg2")
    cc.loader.release("http://bgashare.bingoogolapple.cn/banner/imgs/17.png")
  }
}
