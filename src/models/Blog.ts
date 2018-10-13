import {
    Column,
    Model,
    PrimaryKey,
    Table,
} from 'sequelize-typescript';

@Table({
    tableName: 'bog'
})
export class Blog extends Model<Blog> {

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
    content: string;

    @Column
    create_time: Date;
}
