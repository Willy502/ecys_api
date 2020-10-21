'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
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
      this.belongsTo(models.course_professor, {
        as: 'course_professor',
        foreignKey: { name: 'course_professor_id', allowNull: true }
      });
      this.belongsTo(models.course, {
        as: 'course',
        foreignKey: { name: 'course_id', allowNull: true }
      });
      this.belongsTo(models.professor, {
        as: 'professor',
        foreignKey: { name: 'professor_id', allowNull: true }
      });
      //this.hasMany(models.comment, {foreignKey: 'id_publicacion', as: 'comment', allowNull: true});
    }
  };
  post.init({
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
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "La fecha no pueden estar vacía"
        },
        notNull: {
          msg: "La fecha no pueden ser nula"
        }
      },
      field:'fecha'
    },
    course_professor_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field:'course_professor_id'
    },
    course_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field:'course_id'
    },
    professor_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field:'professor_id'
    },
    tipo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "El tipo no puede estar vacío"
        },
        notNull: {
          msg: "El tipo no puede ser nulo"
        }
      },
      field:'tipo'
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
    modelName: 'post',
  });
  return post;
};