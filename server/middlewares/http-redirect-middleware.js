"use strict";

module.exports = function (req, res, next) {
    if (!req.secure) res.redirect("https://" + req.headers.host + req.path);
    else next();
};