import {
    Column,
    ForeignKey, HasMany,
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
    @Column
    id: string;

    @Column
    @ForeignKey(() => BlogModel)
    blog_id: string;

    @Column
    @ForeignKey(() => TagModel)
    tag_id: string;

}

export default BlogTagModel;
