// got most of the answer from eloquentjavascript.com
var whichCentury = forEach(ancestry, function (person) {
  return Math.ceil(person.died / 100);
});

for (var century in whichCentury) {
  var ages = whichCentury[century].map(function (person) {
    return person.died - person.born;
  });
  console.log(century + "= " + average(ages));
}