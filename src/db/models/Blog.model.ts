import {
    BelongsToMany,
    Column,
    Comment,
    ForeignKey,
    Model,
    PrimaryKey,
    Table,
    Unique
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
    @Column
    id: string;

    @Unique
    @Comment('链接英文名')
    @Column
    name: string;

    @Comment('标题')
    @Column
    title: string;

    @Comment('类型')
    @Column
    type: string;

    @Comment('内容')
    @Column
    content: string;

    @Comment('创建时间')
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
