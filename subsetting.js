
var gen = require('random-seed')

module.exports.deterministic_subsetting = function deterministic_subsetting(backends, client_id, subset_size)
{
    var subset_count = backends.length / subset_size

    var round = client_id / subset_count
    var random = new gen(round)
    shuffle(backends, random)

    var group_num = client_id % subset_count
    return backends.slice((group_num - 1) * subset_size, group_num * subset_size)
}

function shuffle(input, random)
{
    for (var i = 0; i < input.length; i++) {
        var j = random(input.length)
        var temp = input[j]
        input[j] = input[i]
        input[i] = temp
    }
}

