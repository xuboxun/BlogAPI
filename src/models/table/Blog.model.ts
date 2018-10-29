import {
    BelongsToMany,
    Column,
    ForeignKey,
    Model,
    PrimaryKey,
    Table,
} from 'sequelize-typescript';
import BlogSerialModel from './BlogSerial.model';
import BlogTagModel from './BlogTag.model';
import SerialModel from './Serial.model';
import TagModel from './Tag.model';

@Table({
    tableName: 'blog'
})
class BlogModel extends Model<BlogModel> {

    @PrimaryKey
    @ForeignKey(() => BlogTagModel)
    @Column({
        comment: '博客id',
    })
    id: string;

    @Column
    name: string;

    @Column
    title: string;

    @Column
    type: string;

    @Column
    content: string;

    @Column({
        field: 'create_time',
        defaultValue: Date.now()
    })
    createTime: Date;

    @BelongsToMany(() => TagModel, () => BlogTagModel, 'blog_id')
    tags: TagModel[];

    @BelongsToMany(() => SerialModel, () => BlogSerialModel, 'blog_id')
    serial: SerialModel[];
}

export default BlogModel;
