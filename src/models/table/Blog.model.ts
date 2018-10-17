import {
    Column,
    Model,
    PrimaryKey,
    Table,
} from 'sequelize-typescript';

@Table({
    tableName: 'blog'
})
class BlogModel extends Model<BlogModel> {

    @PrimaryKey
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

    @Column
    create_time: Date;
}

export default BlogModel;