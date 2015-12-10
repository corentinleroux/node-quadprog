"use strict";

var qp = require("../lib/quadprog");

function fifth() {
    var dmat = JSON.parse("[[],[0,2,0,0,0,0,0],[0,0,2,0,0,0,0],[0,0,0,2,0,0,0],[0,0,0,0,2,0,0],[0,0,0,0,0,2,0],[0,0,0,0,0,0,2]]");
    var dvec = JSON.parse("[0,-10,-10,-30,-20,-30,-20]");
    var amat = JSON.parse("[[],[0,1,0,0,-1,0,0,1,0,0,0,0,0],[0,0,1,0,-1,0,0,0,1,0,0,0,0],[0,0,1,0,0,-1,0,0,0,1,0,0,0],[0,0,1,0,0,0,-1,0,0,0,1,0,0],[0,0,0,1,0,-1,0,0,0,0,0,1,0],[0,0,0,1,0,0,-1,0,0,0,0,0,1]]");
    var bvec = JSON.parse("[0,4,5,1,-7.001,-1.001,-2.001,0,0,0,0,0,0]");
    var meq = 3;

    return qp.solveQP(dmat, dvec, amat, bvec, meq);
}

module.exports = {
    name: "fifth test",
    fifth: fifth,
    tests: {
        "fifth": function () {
            fifth();
        }
    }
};
