module.exports = (sequelize, dataTypes) => {

    let alias = "Character"

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
            type: dataTypes.STRING(45),
            allowNull: true,
        },
        age:{
            type: dataTypes.STRING(45),
            allowNull: true,
        },
        weight:{
            type: dataTypes.STRING(45),
            allowNull: true,
        },
        history:{
            type: dataTypes.STRING(300),
            allowNull: true,
        },
        movieORserie:{
            type: dataTypes.STRING(45),
            allowNull: true,
        },
    }

    let config = {
        tableName: "character",
        timestamps: false
    }

    const characters = sequelize.define(alias,cols,config)
    return characters
}