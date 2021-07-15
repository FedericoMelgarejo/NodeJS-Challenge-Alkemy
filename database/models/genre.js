module.exports = (sequelize, dataTypes) => {

    let alias = "Movie"

    let cols = {
        id:{
            type: dataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        image:{
            type: dataTypes.STRING(100),
            allowNull: true,
        },
        title:{
            type: dataTypes.STRING(45),
            allowNull: true,
        },
        date:{
            type: dataTypes.DATEONLY(),
            allowNull: true,
        },
        rate:{
            type: dataTypes.INTEGER(11),
            allowNull: true,
        },
        associedChar:{
            type: dataTypes.STRING(100),
            allowNull: true,
        },
    }

    let config = {
        tableName: "movieorserie",
        timestamps: false
    }

    const movies = sequelize.define(alias,cols,config)
    return movies
}