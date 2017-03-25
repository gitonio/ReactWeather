function getTempCallback (location, callback) {
  callback(undefined, 78);
  callback('City not found');
}

getTempCallback('Philadelphia', function(err, temp){
  if (err) {
    console.log('error', err);
  } else {
    console.log('success', temp)
  }
});

function getTempPromise (location) {
  return new Promise(function (resolve, reject){
    setTimeout(function(){
      resolve(79);
      reject('City not found');
    }, 1000)
  });
}

getTempPromise('Philidelphia').then(function (temp) {
  console.log('promise success', temp);
}, function (err){
  console.log('promise error', err);
});

function addPromise(a,b) {
  return new Promise(function (resolve, reject){
    setTimeout(function(){
      if ((typeof a === 'number') & (typeof b === 'number')) {
        resolve(a+b);
      } else {
        reject('uh oh');
      }

    }, 1000)
  });
}

addPromise(2,6).then(function (temp) {
  console.log('promise success', temp);
}, function (err){
  console.log('promise error', err);
});
addPromise(2,'a').then(function (temp) {
  console.log('promise success', temp);
}, function (err){
  console.log('promise error', err);
});
