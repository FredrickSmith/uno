
const io = require ('socket.io');

let cl = { // card list
	뿰: 0x0, 뿱: 0x1 , 뿲: 0x2 , 뿳: 0x3 , 뿴: 0x4,
	뿵: 0x5, 뿶: 0x6 , 뿷: 0x7 , 뿸: 0x8 , 뿹: 0x9,
	뿺: 0xA, 뿻: 0xB , 뿼: 0xC , 뿽: 0xD , 뿾: 0xE,
	뿿: 0xF, 쀀: 0x10, 쀁: 0x11, 쀂: 0x12, 쀃: 0x13
};
stringtocards = (s) => { // string
	var m = s.match (/([^>]+?\|\d+\|\d+)/g); // matchs
	var c = []; // cards

	for (var n = 0; n < m.length; n++) {
		let na = parseInt (m [n].match (/\|(\d+)\|/) [1]),
			ty = parseInt (m [n].match (/\|(\d+)$/)  [1]),
			id = m [n].match (/^(.+?)\|/)  [1]
		c.push (new pqCard (na, ty, id));
	}

	return c;
}

let m = io ('/埕'); // main socket

// send >  m ake,  n ame,  s tart,  j oin,                    g ive ,  p lay
// get  > (m)ake, (n)ame, (s)tart, (j)oin, (j)oin (a)ttempt, (c)ards, (p)lay
class pqGame {
	constructor () {
		this._s = ''; // socket
	}

	joingame (id) {
		this._s = io (id, {
			forceNew: true
		});

		this._s.on ('n', d => { // name

		});
		this._s.on ('s', d => { // start

		});
		this._s.on ('j', d => { // join

		});
		this._s.on ('ja', d => { // join attempt

		});
		this._s.on ('g', d => { // game msg

		});
	}
}

let startgame = id => {

}

m.on ('connection', s => {

	s.on ('m', d => { // make

	});
	s.on ('j', d => { // join
		if (d != '>.<')
			return startgame (d);
		failjoin ();
	});
	s.on ('e', d => { // error

	});
});