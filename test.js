var subset = require('./subsetting.js')
var backends = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
var subset_size = 3
var client_id = 9

var valid_backends = subset.deterministic_subsetting(backends, 9, subset_size)
console.log(valid_backends);
    
