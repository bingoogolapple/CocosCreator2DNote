const { ccclass, property } = cc._decorator

@ccclass
export default class OpenScenePrefab extends cc.Component {
  scenePostfix: number = 2

  onLoad() {
    this.getComponentInChildren(
      cc.Label
    ).string = `打开场景${this.scenePostfix}`
    var eventHandler = new cc.Component.EventHandler()
    eventHandler.target = this.node
    eventHandler.component = "OpenScenePrefab"
    eventHandler.handler = "openScene"
    this.getComponent(cc.Button).clickEvents = [eventHandler]
  }

  openScene() {
    cc.director.loadScene(`scene${this.scenePostfix}`)
  }
}
