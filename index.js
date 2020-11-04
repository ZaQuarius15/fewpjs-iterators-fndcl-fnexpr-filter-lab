// Code your solution here
function findMatching(array, string) {
    return array.filter(e => 
        e.toLowerCase() === string.toLowerCase()
    )
}

function fuzzyMatch(array, string) {
    return array.filter(e =>
        e.toLowerCase().indexOf(string.toLowerCase()) === 0
    )
}

function matchName(array, string) {
    return array.filter(e => 
        e.name.toLowerCase() === string.toLowerCase()
    )
}