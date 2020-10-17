'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class approved_course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  approved_course.init({
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
    id_curso_pensum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "El id_curso_pensum no puede estar vacío"
        },
        notNull: {
          msg: "El id_curso_pensum no puede ser nulo"
        }
      },
      field:'id_curso_pensum'
    },
    nota_aprobada: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "La nota de aprobación no puede estar vacía"
        },
        notNull: {
          msg: "La nota de aprobación no puede ser nula"
        }
      },
      field:'note_aprobada'
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
    indexes: [
      {
        unique: true,
        fields: ['carnet', 'id_curso_pensum']
      }
    ]
  }, {
    sequelize,
    modelName: 'approved_course',
  });
  approved_course.removeAttribute('id');
  return approved_course;
};