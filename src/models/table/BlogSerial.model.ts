import {
    AutoIncrement,
    Column,
    ForeignKey, HasMany,
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
    @Column
    id: string;

    @Column
    @ForeignKey(() => BlogModel)
    blog_id: string;

    @Column
    @ForeignKey(() => SerialModel)
    serial_id: string;

}

export default BlogSerialModel;
