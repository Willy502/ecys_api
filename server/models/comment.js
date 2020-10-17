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
        foreignKey: 'carnet', as: 'user'
      });
      this.belongsTo(models.post, {
        foreignKey: 'id_publicacion', as: 'post'
      });
    }
  };
  comment.init({
    id_comentario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id_comentario'
    },
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
      field:'mensajes'
    },
    id_publicacion: {
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
      field: 'id_publicacion'
    },
    carnet: {
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
      field: 'carnet'
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
  comment.removeAttribute('id');
  return comment;
};