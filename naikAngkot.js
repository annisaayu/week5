function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  let result=[];
  if(arrPenumpang.length===0){
    return result;
  }

  for(let i=0; i<arrPenumpang.length;i++){
      result.push({});
      result[i].penumpang = arrPenumpang[i][0];
      result[i].naikDari = arrPenumpang[i][1];
      result[i].tujuan = arrPenumpang[i][2];

      let jarak;
      for(let j=0; j<rute.length;j++){
        for(let k=0; k<rute.length;k++){
          if(rute[j] === arrPenumpang[i][1] && rute[k] === arrPenumpang[i][2]){
            jarak = k-j;
          }
        }
      }
      result[i].bayar = jarak*2000;
  }
  return result
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
