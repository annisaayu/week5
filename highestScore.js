function highestScore (students) {
  // Code disini
  let result={};
  if(students.length===0){
    return result
  }

  for(let i=0; i<students.length; i++){
    let list={};
    let kelas=students[i].class;
    result[kelas] = list;
    result[kelas].name = students[i].name;
    result[kelas].score = students[i].score;

    for(let j=0; j<students.length; j++){
      if(students[i].score < students[j].score && students[i].class === students[j].class){
        result[kelas].name = students[j].name;
        result[kelas].score = students[j].score;
      }
    }

  }
  return result;
}

// TEST CASE

console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}
