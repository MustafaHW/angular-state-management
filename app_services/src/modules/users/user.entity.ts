import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;
    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    email: string;
    @Column({
        type: DataType.STRING(20),
        unique: true,
        allowNull: false,
    })
    phoneNumber: string;
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    password: string;
    @Column({
        type: DataType.ENUM,
        values: ['male', 'female'],
        allowNull: true,
    })
    gender: string;
}
