'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('professors', [
      {nombres: 'JOSE RICARDO', apellidos: 'MORALES PRADO', created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
      {nombres: 'WILLIAM SAMUEL', apellidos: 'GUEVARA ORELLANA', created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
      {nombres: 'MIRNA IVONNE', apellidos: 'ALDANA LARRAZABAL', created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
      {nombres: 'OTTO RENE', apellidos: 'ESCOBAR LEIVA', created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
      {nombres: 'GABRIEL ALEJANDRO', apellidos: 'DIAS LOPEZ', created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
      {nombres: 'OTTO AMILCAR', apellidos: 'RODRIGUEZ ACOSTA', created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
      {nombres: 'LUIS FERNANDO', apellidos: 'ESPINO BARRIOS', created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
      {nombres: 'ALVARO GIOVANNI', apellidos: 'LONGO MORALES', created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
      {nombres: 'LUIS ALBERTO', apellidos: 'ARIAS', created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
      {nombres: 'ILEANA GUISELA', apellidos: 'RALDA RECINOS DE ILLESCAS', created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
      {nombres: 'EVELYN CAROLINA', apellidos: 'MORALES RUIZ', created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
      {nombres: 'LUDWING FEDERICO', apellidos: 'ALTAN SAC', created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
      {nombres: 'JESÚS ALBERTO', apellidos: 'GUZMÁN', created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
      {nombres: 'ALVARO OBRAYAN', apellidos: 'HERNANDEZ GARCIA', created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
      {nombres: 'LUIS ALBERTO', apellidos: 'VETTORAZZI ESPANA', created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
      {nombres: 'MARLON FRANCISCO', apellidos: 'ORELLANA LOPEZ', created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
      {nombres: 'BYRON RODOLFO', apellidos: 'ZEPEDA AREVALO', created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
      {nombres: 'MOISES EDUARDO', apellidos: 'VELASQUEZ OLIVA', created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
      {nombres: 'HERMAN IGOR', apellidos: 'VELIZ LINARES', created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
      {nombres: 'NEFTALI DE JESUS', apellidos: 'CALDERON MENDEZ', created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
      {nombres: 'MARLON ANTONIO', apellidos: 'PÉREZ TÜRUK', created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
      {nombres: 'CLAUDIA LICETH', apellidos: 'ROJAS MORALES', created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
      {nombres: 'JOSE MANUEL', apellidos: 'RUIZ JUAREZ', created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
      {nombres: 'WILLIAM ESTUARDO', apellidos: 'ESCOBAR ARGUETA', created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
      {nombres: 'EDWIN ESTUARDO', apellidos: 'ZAPETA GÓMEZ', created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
      {nombres: 'VIRGINIA VICTORIA', apellidos: 'TALA AYERDI', created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
      {nombres: 'FLORIZA FELIPA', apellidos: 'AVILA PESQUERA DE MEDINILLA', created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
      {nombres: 'JUAN ALVARO', apellidos: 'DIAZ ARDAVIN', created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
      {nombres: 'OSCAR ALEJANDRO', apellidos: 'PAZ CAMPOS', created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
      {nombres: 'MIGUEL ANGEL', apellidos: 'CANCINOS RENDON', created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
      {nombres: 'CESAR AUGUSTO', apellidos: 'FERNANDEZ CACERES', created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
      {nombres: 'BAYRON WOSVELY', apellidos: 'LOPEZ LOPEZ', created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
      {nombres: 'EDGAR RUBEN', apellidos: 'SABAN RAXON', created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
      {nombres: 'ERICK CARLOS ROBERTO', apellidos: 'NAVARRO DELGADO', created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
      {nombres: 'MARIO JOSE', apellidos: 'BAUTISTA FUENTES', created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
      {nombres: 'MANUEL HAROLDO', apellidos: 'CASTILLO REYNA', created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
      {nombres: 'KEVIN ADIEL', apellidos: 'LAJPOP AJPACAJÁ', created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
      {nombres: 'GUIPPSY JEANNIRA', apellidos: 'MENENDEZ PEREZ', created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
      {nombres: 'JOSE ANIBAL', apellidos: 'SILVA DE LOS ANGELES', created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
      {nombres: 'PEDRO PABLO', apellidos: 'HERNANDEZ RAMIREZ', created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
      {nombres: 'MANUEL FERNANDO', apellidos: 'LOPEZ FERNANDEZ', created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
      {nombres: 'SERGIO ARNALDO', apellidos: 'MENDEZ AGUILAR', created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
      {nombres: 'CESAR ROLANDO', apellidos: 'BATZ SAQUIMUX', created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
      {nombres: 'EVEREST DARWIN', apellidos: 'MEDINILLA RODRIGUEZ', created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
      {nombres: 'JORGE LUIS', apellidos: 'ALVAREZ MEJIA', created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},



    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('professors', null, {});
  }
};
