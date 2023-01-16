const os = require('os')

console.log("OPeratsiyoinniy sistem", os.platform());
console.log("Arxitekturra system", os.arch());
console.log("Info protsessor", os.cpus());
console.log('svabotnaya memory', os.freemem());
console.log('bce paamyat', os.totalmem());
console.log('Domashnaya strana:', os.homedir());
console.log('vkluchen:', os.uptime());