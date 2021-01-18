const { ccclass, property } = cc._decorator

@ccclass
export default class Scene16Game extends cc.Component {
  onLoad() {
    cc.log(this.name)
  }
}
