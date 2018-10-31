import {
    AutoIncrement,
    Column,
    Comment,
    ForeignKey,
    Model,
    PrimaryKey,
    Table,
} from 'sequelize-typescript';
import BlogModel from './Blog.model';
import TagModel from './Tag.model';

@Table({
    tableName: 'blog_tag'
})
class BlogTagModel extends Model<BlogTagModel> {

    @PrimaryKey
    @AutoIncrement
    @Comment('自增id')
    @Column
    id: number;

    @ForeignKey(() => BlogModel)
    @Comment('博客id')
    @Column({
        field: 'blog_id'
    })
    blogId: string;

    @ForeignKey(() => TagModel)
    @Comment('标签id')
    @Column({
        field: 'tag_id'
    })
    tagId: string;

}

export default BlogTagModel;
