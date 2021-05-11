const fs = require ('fs')
class Data {
    constructor(){

    }
    set(data , value){
        if(!data)throw new TypeError("Veri Tanımsız")
        const file = JSON.parse(fs.readFileSync("database.json", "utf-8"))
        file[data] = value
        return fs.writeFileSync("database.json", JSON.stringify(file , null , 1))
    }
    fetch(data){
        if(!data)throw new TypeError("Veri Tanımsız")
        const file = JSON.parse(fs.readFileSync("database.json","utf-8"))
        if(!file[data]) throw new TypeError('Boyle Bir Veri Bulamadim \n' + __dirname)
        return file[data]
    }
    check(data){
        if(!data)throw new TypeError("Veri Tanımsız")
        const file = JSON.parse(fs.readFileSync("database.json","utf-8"))
        return file[data] ? true : false
    }
    delete(data){
        if(!data)throw new TypeError("Veri Tanımsız")
        const file = JSON.parse(fs.readFileSync("database.json","utf-8"))
        if(!file[data]) throw new TypeError('Boyle Bir Veri Bulamadim \n' + __dirname)
     delete file[data]
     return fs.writeFileSync("database.json", JSON.stringify(file , null ,1))
    }
    backup(fileName){
        if(!fileName)throw new TypeError("Dosya Adı Tanımsız")
        const file = JSON.parse(fs.readFileSync("database.json","utf-8"))
        return fs.writeFileSync(`${fileName}.json`,JSON.stringify(file , null ,1))
    }
    add(data , value){
        if(!data)throw new TypeError("Veri Tanımsız")
        if(typeof value !== "number")throw new TypeError("Değer Sayı Olmalı")
        if(!this.check(data))throw new TypeError("Veri Tanımsız")
        if(typeof this.fetch(data) !== "number")throw new TypeError("Değer Bir Sayı Olmalı")
        const file = JSON.parse(fs.readFileSync("database.json","utf-8"))
        file[data] +=value
        return fs.writeFileSync("database.json",JSON.stringify(file , null , 1))
    }
    subtract(data ,value){

    
    if(!data)throw new TypeError("Veri Tanımsız")
    if(typeof value !== "number")throw new TypeError("Değer Sayı Olmalı")
    if(!this.check(data))throw new TypeError("Veri Tanımsız")
    if(typeof this.fetch(data) !== "number")throw new TypeError("Değer Bir Sayı Olmalı")
    const file = JSON.parse(fs.readFileSync("database.json","utf-8"))
    file[data]-= value
    return fs.writeFileSync("database.json",JSON.stringify(file ,null ,1))
}
reset(){
    const file = JSON.parse(fs.readFileSync("database.json","utf-8"))
    return fs.writeFileSync("database.json",JSON.stringify({}, null , 1))
}
}
module.exports = new Data()