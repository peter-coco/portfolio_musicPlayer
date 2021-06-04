const express = require("express");
const site1 = express.createServer();
const site_vhosts = [];

site_vhosts.push(express.vhost("https://musicdata.link/", site1));

const vhost = express.createServer().apply(this, site_vhosts);

site1.listen(8080);
vhost.listen(80);
