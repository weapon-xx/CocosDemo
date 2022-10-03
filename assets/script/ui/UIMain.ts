import { _decorator, Component, Node, input, Input, EventTouch } from 'cc';
import { GameManager } from '../frameWork/GameManager';
const { ccclass, property } = _decorator;

@ccclass('UIMain')
export class UIMain extends Component {
    @property
    public planeSpeed = 10;

    @property(Node)
    public playerPlane: Node = null;

    @property(GameManager)
    public gameManager: GameManager = null;

    start() {
        this.node.on(Input.EventType.TOUCH_START, this._touchStart, this);
        this.node.on(Input.EventType.TOUCH_MOVE, this._touchMove, this);
        this.node.on(Input.EventType.TOUCH_END, this._touchEnd, this);
    }

    update(deltaTime: number) {
        
    }

    _touchStart(event: EventTouch) {
        this.gameManager.isShooting(true);
    }

    _touchMove(event: EventTouch) {
        const delta = event.getDelta();
        let pos = this.playerPlane.position;
        this.playerPlane.setPosition(pos.x + 0.01 * this.planeSpeed * delta.x, pos.y, pos.z - 0.01 * this.planeSpeed * delta.y);
    }

    _touchEnd(event: EventTouch) {
        this.gameManager.isShooting(false);
    }
}

