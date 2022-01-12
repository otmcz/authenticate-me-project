'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Beats', [
    {
     title: 'Recuerdos',
     imageUrl: "https://i2.wp.com/www.slang.fm/wp-content/uploads/2020/09/anuel-aa-ozuna-amistad-enemistad-problemas-twitter.jpg?fit=1024%2C512&ssl=1",
     audioUrl: "file:///Users/chrisramos/Downloads/%5BFREE%5D%20Ozuna%20Type%20Beat%20x%20Rauw%20Alejandro%20x%20Anuel%20AA%20'Recuerdos'%F0%9F%92%96%20_%20Instrumental%20de%20Reggaeton%202021%F0%9F%94%A5.mp3",
     userId: 1,
     key: 'CM',
     typeId: 1,
     createdAt: new Date(),
     updatedAt: new Date()
    },
    {
      title: "I’m Back",
      imageUrl: "https://www.cjru.ca/wp-content/uploads/2020/12/Drake-fields1release1-album-review-1.jpg",
      audioUrl: "file:///Users/chrisramos/Downloads/%5BFREE%5D%20Drake%20x%20Lil%20Wayne%20Type%20Beat%20-%20%E2%80%9CI%E2%80%99m%20Back%E2%80%9D.mp3",
      userId: 2,
      key: 'C#m',
      typeId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      title: 'Peaking / Falling',
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/9/96/The_Weeknd_-_Trilogy.png",
      audioUrl: "file:///Users/chrisramos/Downloads/%5BFREE%5D%20The%20Weeknd%20Trilogy%20Type%20Beat%20_%20Peaking%20_%20Falling.mp3",
      userId: 3,
      key: 'C#m',
      typeId: 3,
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
   return queryInterface.bulkDelete('Beats', null, {});
  }
};
