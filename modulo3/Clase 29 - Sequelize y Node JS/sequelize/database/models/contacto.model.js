module.exports = (sequelize, Sequelize, DataTypes) => {

const Contacto = sequelize.define(
    "contacto", // Model name
    {    // Attributes
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
        },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    apellido: {
      type:  DataTypes.STRING,
      allowNull: false
    },
    email: {
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.STRING
    },
    manyBook: {
      type: DataTypes.INTEGER,
    },
  },
    {
      // Options
      timestamps: true,
      underscrored: true,
    }
  );
 return Contacto
};
