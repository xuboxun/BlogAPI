import {
    AutoIncrement,
    Column,
    Comment,
    Model,
    PrimaryKey,
    Table,
    Unique
} from 'sequelize-typescript';

@Table({
    tableName: 'admin'
})
class AdminModel extends Model<AdminModel> {

    @PrimaryKey
    @AutoIncrement
    @Comment('自增id')
    @Column
    id: number;

    @Unique
    @Comment('账号')
    @Column
    account: string;

    @Comment('邮箱')
    @Column
    email: string;

    @Unique
    @Comment('密码')
    @Column
    password: string;

    @Comment('创建时间')
    @Column({
        field: 'create_time',
        defaultValue: Date.now()
    })
    createTime: Date;

    @Comment('更新时间')
    @Column({
        field: 'update_time',
        defaultValue: null
    })
    updateTime: Date;
}

export default AdminModel;
