
export class Constant {
    public static EnemyType = {
        Type1: 1,
        Type2: 2,
    };

    public static Combination = {
        PLANE1: 1,
        PLANE2: 2,
        PLANE3: 3,
    };

    public static ConllisionType = {
        SELF_PLANE: 1 << 1,
        ENEMY_PLANE: 1 << 2,
        SELF_BULLET: 1 << 3,
        ENEMY_BULLET: 1 << 4,
        BULLET_PROP: 1 << 5,
    };

    public static BulletPropType = {
        BULLET_M: 1,
        BULLET_H: 2,
        BULLET_S: 3,
    };
}

