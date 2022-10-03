import { _decorator, Component, Node } from 'cc';
import { Constant } from '../frameWork/Constant';
const { ccclass, property } = _decorator;

const OUTOFBOUNDE = 50;

@ccclass('EnemyPlane')
export class EnemyPlane extends Component {
    private _enemySpeed = 0;

    // public enemyType = Constant.EnemyType.Type1;


    start() {

    }

    update(deltaTime: number) {
        const pos = this.node.position;
        const movePos  = pos.z + this._enemySpeed;
        this.node.setPosition(pos.x, pos.y, movePos);

        if (movePos > OUTOFBOUNDE) {
            this.node.destroy();
        }
    }

    show(speed: number) {
        this._enemySpeed = speed;
    }
}

