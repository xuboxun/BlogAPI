import {
    BelongsToMany,
    Column, Comment, ForeignKey, HasMany,
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
    @Column
    id: string;

    @Comment('链接英文名')
    @Column
    name: string;

    @Comment('中文名')
    @Column
    title: string;

    @Comment('描述')
    @Column
    description: string;

    @Comment('创建时间')
    @Column({
        field: 'create_time',
        defaultValue: Date.now()
    })
    createTime: Date;

    @BelongsToMany(() => BlogModel, () => BlogTagModel, 'tag_id')
    blogs: BlogModel[];
}

export default TagModel;
