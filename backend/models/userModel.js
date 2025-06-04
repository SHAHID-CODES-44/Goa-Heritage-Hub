import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const User = sequelize.define('User', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        // Remove unique here to avoid multiple index creation issues
        // unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phoneNo: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: true
});

export default User;
