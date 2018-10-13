import {
    Column,
    Model,
    PrimaryKey,
    Table,
} from 'sequelize-typescript';

@Table({
    tableName: 'serial'
})
export class Serial extends Model<Serial> {

    @PrimaryKey
    @Column({
        comment: '专栏id',
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
