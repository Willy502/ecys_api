'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user, {
        foreignKey: 'user_carnet', as: 'user'
      });
      this.belongsTo(models.post, {
        foreignKey: 'post_id', as: 'post'
      });
    }
  };
  comment.init({
    mensaje: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "El mensaje no pueden estar vacío"
        },
        notNull: {
          msg: "El mensaje no pueden ser nulo"
        }
      },
      field:'mensaje'
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "La publicación no puede estar vacía"
        },
        notNull: {
          msg: "La publicación no puede ser nula"
        }
      },
      field: 'post_id'
    },
    user_carnet: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "El número de carnet no puede estar vacío"
        },
        notNull: {
          msg: "El número de carnet no puede ser nulo"
        }
      },
      field: 'user_carnet'
    },
    created_at: {
      type: DataTypes.DATE,
      validate: {
        notEmpty: {
          msg: "created_at no puede estar vacío"
        },
        isDate: {
          msg: "Formato invalido"
        }
      },
      field:'created_at'
    },
    updated_at: {
      type: DataTypes.DATE,
      validate: {
        notEmpty: {
          msg: "updated_at no puede estar vacío"
        },
        isDate: {
          msg: "Formato invalido"
        }
      },
      field:'updated_at'
    }
  }, {
    sequelize,
    timestamps: false, // Eliminamos el updatedAt y createdAt
    underscored: true, // Habilitar la creacion con guines bajos a nivel de base de datos
    defaultScope: {
      attributes: {
        exclude: [ // excluir campos de un select
          'created_at',
          'updated_at'
        ]
      }
    }
  }, {
    sequelize,
    modelName: 'comment',
  });
  return comment;
};