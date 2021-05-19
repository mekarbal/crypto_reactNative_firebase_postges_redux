module.exports = (sequelize, DataTypes) => {
  const Wallet = sequelize.define("Wallet", {
    id_user: DataTypes.NUMBER,
    cryp_name: DataTypes.STRING,
    value: DataTypes.FLOAT,
  });

  Wallet.associate = (models) => {
    Wallet.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Wallet;
};
