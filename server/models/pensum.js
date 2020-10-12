'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pensum extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.course, {
        foreignKey: 'curso_codigo_curso', as: 'codigo_curso'
      });
    }
  };
  pensum.init({
    id_curso_pensum: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'id_curso_pensum'
    },
    curso_codigo_curso: {
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
      field:'curso_codigo_curso'
    },
    creditos: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Los creditos no pueden estar vacíos"
        },
        notNull: {
          msg: "Los creditos no pueden ser nulos"
        }
      },
      field:'creditos'
    },
    semestre: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "El semestre no puede estar vacío"
        },
        notNull: {
          msg: "El semestre no puede ser nulo"
        }
      },
      field:'semestre'
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
    },
  }, {
    sequelize,
    modelName: 'pensum',
  });
  return pensum;
};