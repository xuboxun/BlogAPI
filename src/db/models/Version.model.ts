import {
    AutoIncrement,
    Column,
    Comment,
    Model,
    PrimaryKey,
    Table,
    Unique,
} from 'sequelize-typescript';

@Table({ tableName: 's_version' })
class VersionModel extends Model<VersionModel> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Comment('版本号')
    @Unique
    @Column
    version: string;

    @Comment('描述')
    @Column
    description: string;

    @Comment('创建时间')
    @Column({
        field: 'create_time',
        defaultValue: Date.now()
    })
    createTime: Date;

    @Comment('更新时间')
    @Column({
        field: 'update_time'
    })
    updateTime: Date;
}

export default VersionModel;
