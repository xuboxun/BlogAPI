import {
    BelongsToMany,
    Column, Comment, ForeignKey,
    Model,
    PrimaryKey,
    Table,
} from 'sequelize-typescript';
import BlogModel from './Blog.model';
import BlogSerialModel from './BlogSerial.model';

@Table({
    tableName: 'serial'
})
class SerialModel extends Model<SerialModel> {

    @PrimaryKey
    @ForeignKey(() => BlogModel)
    @Column
    id: string;

    @Comment('链接英文名')
    @Column
    name: string;

    @Comment('中文名')
    @Column
    title: string;

    @Comment('描述')
    @Column
    description: string;

    @Comment('创建时间')
    @Column({
        field: 'create_time',
        defaultValue: Date.now()
    })
    createTime: Date;

    @BelongsToMany(() => BlogModel, () => BlogSerialModel, 'serial_id')
    blogs: BlogModel[];
}

export default SerialModel;
