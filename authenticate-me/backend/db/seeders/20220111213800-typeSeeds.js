'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Types', [
    {
     name: 'Reggaeton',
     createdAt: new Date(),
     updatedAt: new Date()
    },
    {
      name: 'Drake',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'The Weeknd',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Types', null, {});
  }
};
