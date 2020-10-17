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
        foreignKey: 'carnet', as: 'user'
      });
      this.belongsTo(models.course_professor, {
        foreignKey: 'id_catedratico_curso', as: 'course_professor'
      });
      this.belongsTo(models.course, {
        foreignKey: 'codigo_curso', as: 'course'
      });
      this.belongsTo(models.professor, {
        foreignKey: 'no_catedratico', as: 'professor'
      });
    }
  };
  post.init({
    id_publicacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id_publicacion'
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
    id_catedratico_curso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "El id_catedratico_curso no puede estar vacío"
        },
        notNull: {
          msg: "El id_catedratico_curso no puede ser nulo"
        }
      },
      field:'id_catedratico_curso'
    },
    codigo_curso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "El código de curso no puede estar vacío"
        },
        notNull: {
          msg: "El código de curso no puede ser nulo"
        }
      },
      field:'codigo_curso'
    },
    no_catedratico: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "El catedratico no puede estar vacío"
        },
        notNull: {
          msg: "El catedratico no puede ser nulo"
        }
      },
      field:'no_catedratico'
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