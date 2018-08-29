module.exports = function(sequelize, DataType){
  var burger = sequelize.define("burger", {
    burger_name: {
      type: DataType.STRING,
      len: [1, 100],
      allowNull: false
    },
    devoured: {
      type: DataType.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });
  return burger;
};

