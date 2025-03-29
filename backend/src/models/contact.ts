import { DataTypes, Model } from 'sequelize';
import sequelize from '@config/database';

class Contact extends Model {
  public id!: number;
  public name!: string;
  public github!: string;
  public linkedin!: string;
}

Contact.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    github: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    linkedin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Contact',
    tableName: 'contacts',
  }
);

export default Contact;
