const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("pokemon", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    image: {
      type: DataTypes.STRING,
    },
    hp: {
      type: DataTypes.INTEGER,

    },
    attack: {
      type: DataTypes.INTEGER,
    
    },
    defense: {
      type: DataTypes.INTEGER,
    
        },
    speed: {
      type: DataTypes.INTEGER,
     
    },
    height: {
      type: DataTypes.INTEGER,
    },
    weight: {
      type: DataTypes.INTEGER,
    },

      //* los objetos que yo cree, se van a crear con esta prop. Distinguirlos de la API
      createdInDb: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      }
  },{
    timestamps:false // tercert algumento de difene, la fecha de creacion ñe
 } );
};

//  (\__/)
// (o^.^o)
// \_(")_/
