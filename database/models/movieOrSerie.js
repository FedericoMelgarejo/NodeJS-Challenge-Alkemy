module.exports = (sequelize, dataTypes) => {

    let alias = "Genre"

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
        name:{
            type: dataTypes.STRING(100),
            allowNull: true,
        },
        movieORserie:{
            type: dataTypes.STRING(100),
            allowNull: true,
        },
    }

    let config = {
        tableName: "genre",
        timestamps: false
    }

    const movies = sequelize.define(alias,cols,config)
    return movies
}