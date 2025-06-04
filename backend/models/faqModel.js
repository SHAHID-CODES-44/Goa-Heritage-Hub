import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js'; // make sure to add .js extension

const Faq = sequelize.define('Faq', {
  question: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Faq;
