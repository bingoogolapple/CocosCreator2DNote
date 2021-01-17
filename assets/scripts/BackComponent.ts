const { ccclass, property } = cc._decorator

@ccclass
export default class NewClass extends cc.Component {
  backScene1() {
    cc.director.loadScene("scene1")
  }
}
