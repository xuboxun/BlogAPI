import {
    Column,
    Model,
    PrimaryKey,
    Table,
} from 'sequelize-typescript';

@Table({
    tableName: 'blog_tag'
})
class BlogTagModel extends Model<BlogTagModel> {

    @PrimaryKey
    @Column
    id: string;

    @Column
    blog_id: string;

    @Column
    tag_id: string;
}

export default BlogTagModel;
