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
  language: {
    type: DataType.ENUM('python', 'js'),
    defaultValue: 'python',
  },
  definition: {
    type: DataType.TEXT,
  },
});

export default Recipie;
