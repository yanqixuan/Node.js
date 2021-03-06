// mvc model  模板
// mysql 数据 row => Object
// orm sequelize


module.exports = (sequelize,DataTypes)=>sequelize.define (
  'shops',
  {
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    name:{
      type:DataTypes.STRING,
      allowNull:false
    },
    thumb_url:DataTypes.STRING
  },
  {
    tableName:'shops',
  }
)