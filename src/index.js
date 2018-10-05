module.exports = function getZerosCount(number) {
  var mult=5; i=1; zeros=0;
  do {
    numi=Math.pow(mult,i)
    zeros+=Math.floor(number / numi); // слагаемое number / 5^i
    i++;
  } while (numi<=number);   // пока 5^i не превысит число number
  return zeros;
}
