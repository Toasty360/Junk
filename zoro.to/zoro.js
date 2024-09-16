const P = "/embed-2/ajax/e-1/getSources?id=" + I;
function G() {
  fetch(P, (resp) => {
    var kr;
    if (resp) {
      kr = resp["sources"];
      t = k2(kr) ? kr : kX(kr);
      i = resp.server;
      n = resp["tracks"];
      B = resp.intro || null;
      A = resp.outro || null;
      J();
    }
  });
}
const kX = (kh) => {
  let kr = "";
  let ks = kh;
  let kF = 0;
  for (let ka = 0; ka < o; ka++) {
    let kH;
    let kg;
    switch (ka) {
      case 0:
        kH = Q;
        kg = e;
        break;
      case 1:
        kH = T;
        kg = Z;
        break;
      case 2:
        kH = u;
        kg = E;
        break;
      case 3:
        kH = partKeyStartPosition_3;
        kg = partKeyLength_3;
        break;
      case 4:
        kH = partKeyStartPosition_4;
        kg = partKeyLength_4;
        break;
      case 5:
        kH = partKeyStartPosition_5;
        kg = partKeyLength_5;
        break;
      case 6:
        kH = partKeyStartPosition_6;
        kg = partKeyLength_6;
        break;
      case 7:
        kH = partKeyStartPosition_7;
        kg = partKeyLength_7;
        break;
      case 8:
        kH = partKeyStartPosition_8;
        kg = partKeyLength_8;
    }
    var kt = kH + kF;
    var kn = kt + kg;
    kr += kh.slice(kt, kn);
    ks = ks.replace(kh.substring(kt, kn), "");
    kF += kg;
  }
  return k1(ks, kr);
};
