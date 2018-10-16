import {
    Column,
    Model,
    PrimaryKey,
    Table,
} from 'sequelize-typescript';

@Table({
    tableName: 'blog_tag'
})
class BlogTag extends Model<BlogTag> {

    @PrimaryKey
    @Column
    id: string;

    @Column
    blog_id: string;

    @Column
    tag_id: string;
}

export default BlogTag;
