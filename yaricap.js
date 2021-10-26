const argumnets=process.argv.slice(1);
function cap(yaricap){
    let snc=yaricap*2*3.14;
    console.log(`Yarıçapı (${yaricap}) olan dairenin alanı: (${snc})`)
}
cap(argumnets[1]*1)