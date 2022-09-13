import { Model, DataTypes } from 'sequelize';

import sequelize from '../config/connection';

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

export default ProductTag;
