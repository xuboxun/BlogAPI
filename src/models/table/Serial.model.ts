import {
    BelongsToMany,
    Column, ForeignKey,
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
    @Column({
        comment: '专栏id',
    })
    id: string;

    @Column
    name: string;

    @Column
    title: string;

    @Column
    description: string;

    @Column({
        field: 'create_time',
        defaultValue: Date.now()
    })
    createTime: Date;

    @BelongsToMany(() => BlogModel, () => BlogSerialModel, 'serial_id')
    blogs: BlogModel[];
}

export default SerialModel;
