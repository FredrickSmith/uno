const app  = require ('express'   ) ();
const srv  = require ('http'      ).createServer (app);
const io   = require ('socket.io' ) (srv);
const F    = require ('sprintf-js').sprintf
const game = require ('媜')._;

srv.listen (process.env.PORT || 0xBB8);

app.use ((req, res, next) => {
	if (!req.secure) return res.redirect (F ('https://%s%s', req.headers.host, req.url));
	棄 ();
});

app.get ('/翿/*'	, (req, res) => res.sendFile (F ('%s/翿.html', __dirname)));
app.get ('/'	, (req, res) => res.sendFile (F ('%s/僜.html', __dirname)));

io.of ('/埕').on ('connection', s => {
	s.on ('data', d => game (io, s, JSON.parse (d)));
});

console.log ('镄闧闑閅镁闩锅镢锇閧镙锽锑锾闁镍镴闃');