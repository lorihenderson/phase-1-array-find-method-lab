// code your solution here
function superbowlWin(record) {
    record.result === "W";
    record.year === "2015";
}
record.find(superbowlWin);


// function superbowlWin(record) {
//     if (record.result) {
//         return record.find(function(test) {
//             test.result === "W"
//         })
//     } else {
//         const resss = record.find(rec => rec.year);
//         return resss
//     }
// }

/*
function matchName(drivers, str) {
    const pikachu = drivers.filter(function(squirtle) {
        return squirtle.name === str
    })
    return pikachu;
}

*/