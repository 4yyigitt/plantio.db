![Image](https://img.shields.io/npm/v/plantio.db?color=%2351F9C0&label=Wio.db) 
![Image](https://img.shields.io/npm/dt/plantio.db.svg?color=%2351FC0&maxAge=3600) 
#
![Image](https://nodei.co/npm/plantio.db.png?downloads=true&downloadRank=true&stars=true)
<br>

## Yüklemek İçin
```npm
npm install  plantio.db
```

## Nasıl Kullanılır? || how to use?
Kullanmadan Önce Projenizde "database.json" Adlı  Bir Dosya Açmalısınız 

Before Using, You Need To Open A File Named "database.json" in Your Project.
# TypeScript
```typescript
import db from "plantio.db"
```
# JS
```javascript
const db = require('plantio.db')

// Data set | get
db.set("data1", 1);
db.fetch("data1");

// Data exists

db.check("data1");

// Delete data

db.delete("key");

// DB Math metods

db.add("data1", 10);
db.substract("data1", 5);

// Reset DB
db.reset();

//Backing Up the DB
db.backup("myfilename");

//All Database
db.all()

// DB Array method
db.push("array1", 10);
```
## Bana ulaşabileceğiniz yerler. || Where You Can Reach Me Are Shown Below
[Discord](https://discord.gg/Wm2pYFuFR9)
