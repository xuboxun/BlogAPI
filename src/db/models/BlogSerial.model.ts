import {
    AutoIncrement,
    Column,
    Comment,
    Default,
    ForeignKey,
    Model,
    PrimaryKey,
    Table,
} from 'sequelize-typescript';
import BlogModel from './Blog.model';
import SerialModel from './Serial.model';

@Table({
    tableName: 'blog_serial'
})
class BlogSerialModel extends Model<BlogSerialModel> {

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

    @ForeignKey(() => SerialModel)
    @Comment('专栏id')
    @Column({
        field: 'serial_id'
    })
    serialId: string;

}

export default BlogSerialModel;
