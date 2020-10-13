'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class course_professor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.course, {
        foreignKey: 'curso_codigo_curso', as: 'codigo_curso'
      });
      this.belongsTo(models.professor, {
        foreignKey: 'catedratico_no_catedratico', as: 'no_catedratico'
      });
    }
  };
  course_professor.init({
    id_catedratico_curso: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'id_catedratico_curso'
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
    catedratico_no_catedratico: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "El código de catedratico no puede estar vacío"
        },
        notNull: {
          msg: "El código de catedratico no puede ser nulo"
        }
      },
      field:'catedratico_no_catedratico'
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
    modelName: 'course_professor',
  });
  return course_professor;
};