var every = function (array) {
  return array ? 1 : 0;
}

var some = function (array) {
	if (true in array) {
		return true; 
	} else {
		false;
	}
}