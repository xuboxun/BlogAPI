import {
    BelongsToMany,
    Column,
    ForeignKey,
    Model,
    PrimaryKey,
    Table,
} from 'sequelize-typescript';
import TagModel from './Tag.model';
import BlogTagModel from './BlogTag.model';

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
}

export default BlogModel;
