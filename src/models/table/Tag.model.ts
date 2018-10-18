import {
    BelongsToMany,
    Column, ForeignKey, HasMany,
    Model,
    PrimaryKey,
    Table,
} from 'sequelize-typescript';
import BlogModel from './Blog.model';
import BlogTagModel from './BlogTag.model';

@Table({ tableName: 'tag' })
class TagModel extends Model<TagModel> {
    @PrimaryKey
    @ForeignKey(() => BlogTagModel)
    @Column({
        comment: '标签id',
    })
    id: string;

    @Column
    name: string;

    @Column
    title: string;

    @Column
    description: string;

    @Column
    create_time: Date;

    @BelongsToMany(() => BlogModel, () => BlogTagModel, 'tag_id')
    blogs: BlogModel[];
}

export default TagModel;
