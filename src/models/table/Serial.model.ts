import {
    Column,
    Model,
    PrimaryKey,
    Table,
} from 'sequelize-typescript';

@Table({
    tableName: 'serial'
})
class SerialModel extends Model<SerialModel> {

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

export default SerialModel;