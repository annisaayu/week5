function meleeRangedGrouping (str) {
  result=[[],[]];

  if(str.length=== 0){
    return [];
  }

  let group= str.split(',');
  let strip=[];
  for(let i=0; i<group.length;i++){
    let pecah = group[i].split('-');
    strip.push(pecah);
  }

  for(let i=0; i<strip.length;i++){
    if(strip[i][1]==='Ranged'){
      result[0].push(strip[i][0]);
    }else{
      result[1].push(strip[i][0]);
    }
  }

  return result
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
