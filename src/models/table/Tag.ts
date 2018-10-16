import {
    Column,
    Model,
    PrimaryKey,
    Table,
} from 'sequelize-typescript';

@Table({
    tableName: 'tag'
})
class Tag extends Model<Tag> {

    @PrimaryKey
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
}

export default Tag;
