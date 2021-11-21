var first = document.getElementById("first")
var second = document.getElementById("second")
var third = document.getElementById("third")
var forth = document.getElementById("forth")
var fifth = document.getElementById("fifth")
var sixth = document.getElementById("sixth")
var seventh = document.getElementById("seventh")
var eighth = document.getElementById("eighth")
var ninth = document.getElementById("ninth")
var tenth = document.getElementById("tenth")
var i = 0;
var l = 0;
var v = 1;
var b = 1;
var t = 1;

function firstt() {
    setInterval(() => {
        i = i + v;
        l = l + b;
        first.style.marginLeft = i + "px";
        first.style.marginTop = l + "px";
        if (i == 1423) {
            v = v - 1;
        }
        if (i == 0) {
            v = v + 1;
        }
        if (l == 641) {
            b = b - 1;
        }
        if (l == 0) {
            b = b + 1;
        }
    }, 1);
}

function secondd() {
    var il = 1400;
    var li = 100;
    var vv = 1;
    var bb = 1;
    setInterval(() => {
        il = il + vv;
        li = li + bb;
        second.style.marginLeft = il + "px";
        second.style.marginTop = li + "px";
        if (il == 1423) {
            vv = vv - 1;
        }
        if (il == 0) {
            vv = vv + 1;
        }
        if (li == 641) {
            bb = bb - 1;
        }
        if (li == 0) {
            bb = bb + 1;
        }
    }, t);
}

function thirdd() {
    var fi = 750;
    var vb = 300;
    var fg = 1;
    var gf = 1
    setInterval(() => {
        fi = fi + fg;
        vb = vb + gf;
        third.style.marginLeft = fi + "px";
        third.style.marginTop = vb + "px";
        if (fi == 1423) {
            fg = fg - 1;
        }
        if (fi == 0) {
            fg = fg + 1;
        }
        if (vb == 641) {
            gf = gf - 1;
        }
        if (vb == 0) {
            gf = gf + 1;
        }
    }, t);
}

function forthh() {
    var hh = 350;
    var hhh = 450;
    var tt = 1;
    var rr = 1;
    setInterval(() => {
        hh = hh + tt;
        hhh = hhh + rr;
        forth.style.marginLeft = hh + "px";
        forth.style.marginTop = hhh + "px";
        if (hh == 1423) {
            tt = tt - 1;
        }
        if (hh == 0) {
            tt = tt + 1;
        }
        if (hhh == 641) {
            rr = rr - 1;
        }
        if (hhh == 0) {
            rr = rr + 1;
        }
    }, t);
}

function fifthh() {
    var iii = 800;
    var lll = 50;
    var n = 1;
    var nnn = 1;
    setInterval(() => {
        iii = iii + n;
        lll = lll + nnn;
        fifth.style.marginLeft = iii + "px";
        fifth.style.marginTop = lll + "px";
        if (iii == 1423) {
            n = n - 1;
        }
        if (iii == 0) {
            n = n + 1;
        }
        if (lll == 641) {
            nnn = nnn - 1;
        }
        if (lll == 0) {
            nnn = nnn + 1;
        }
    }, t);
}

function sixthh() {
    var mm = 420;
    var nn = 180;
    var c = 1;
    var cc = 1;
    setInterval(() => {
        mm = mm + c;
        nn = nn + cc;
        sixth.style.marginLeft = mm + "px";
        sixth.style.marginTop = nn + "px";
        if (mm == 1423) {
            c = c - 1;
        }
        if (mm == 0) {
            c = c + 1;
        }
        if (nn == 641) {
            cc = cc - 1;
        }
        if (nn == 0) {
            cc = cc + 1;
        }
    }, t);
}

function seventhh() {
    var ii = 1400;
    var ll = 350;
    var z = 1;
    var zz = 1;
    setInterval(() => {
        ii = ii + z;
        ll = ll + zz;
        seventh.style.marginLeft = ii + "px";
        seventh.style.marginTop = ll + "px";
        if (ii == 1423) {
            z = z - 1;
        }
        if (ii == 0) {
            z = z + 1;
        }
        if (ll == 641) {
            zz = zz - 1;
        }
        if (ll == 0) {
            zz = zz + 1;
        }
    }, t);
}

function eighthh() {
    var a = 1200;
    var d = 600;
    var o = 1;
    var p = 1;
    setInterval(() => {
        a = a + o;
        d = d + p;
        eighth.style.marginLeft = a + "px";
        eighth.style.marginTop = d + "px";
        if (a == 1423) {
            o = o - 1;
        }
        if (a == 0) {
            o = o + 1;
        }
        if (d == 641) {
            p = p - 1;
        }
        if (d == 0) {
            p = p + 1;
        }
    }, t);
}

function ninthh() {
    var m = 0;
    var s = 640;
    var k = 1;
    var j = 1;
    setInterval(() => {
        m = m + k;
        s = s + j;
        ninth.style.marginLeft = m + "px";
        ninth.style.marginTop = s + "px";
        if (m == 1423) {
            k = k - 1;
        }
        if (m == 0) {
            k = k + 1;
        }
        if (s == 641) {
            j = j - 1;
        }
        if (s == 0) {
            j = j + 1;
        }
    }, t);
}

function tenthh() {
    var q = 1010;
    var w = 150;
    var e = 1;
    var r = 1;
    setInterval(() => {
        q = q + e;
        w = w + r;
        tenth.style.marginLeft = q + "px";
        tenth.style.marginTop = w + "px";
        if (q == 1423) {
            e = e - 1;
        }
        if (q == 0) {
            e = e + 1;
        }
        if (w == 641) {
            r = r - 1;
        }
        if (w == 0) {
            r = r + 1;
        }
    }, t);
}
firstt();
secondd();
thirdd();
forthh();
fifthh();
sixthh();
seventhh();
eighthh();
ninthh();
tenthh();