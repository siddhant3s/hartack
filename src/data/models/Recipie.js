import DataType from 'sequelize';
import Model from '../sequelize';

const Recipie = Model.define('Recipie', {
  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
  },
  name: {
    type: DataType.UUID,
  },
  description: {
    type: DataType.STRING(255),
    defaultValue: '',
  },
  url: {
    type: DataType.TEXT,
    allowNull: false,
    validate: { isUrl: true },
  },
  language: {
    type: DataType.ENUM('python', 'js'),
    defaultValue: 'python',
  },
  definition: {
    type: DataType.TEXT,
    allowNull: false,
  },
});

export default Recipie;
