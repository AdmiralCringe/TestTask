function dscount(string, s1, s2) {
    string = string.toLowerCase();
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    let i = string.indexOf(s1);
    let count = 0;
    while(i !== -1){
        if(string[i] === s1){
            let chain = string.slice(i, i + s1.length + s2.length)
            if(chain === s1 + s2){
                count++
            }
            i = string.indexOf(s1, i + 1);
        }
        
    }
    return count
}
try {
    test(dscount, ['ab___ab__', 'a', 'b'], 2);
    test(dscount, ['___cd____', 'c', 'd'], 1);
    test(dscount, ['de_______', 'd', 'e'], 1);
    test(dscount, ['12_12__12', '1', '2'], 3);
    test(dscount, ['_ba______', 'a', 'b'], 0);
    test(dscount, ['_a__b____', 'a', 'b'], 0);
    test(dscount, ['-ab-аb-ab', 'a', 'b'], 2);
    test(dscount, ['aAa', 'a', 'a'], 2);

    console.info("Congratulations! All tests passed.");
} catch(e) {
    console.error(e);
}

// Простая функция тестирования
function test(call, args, count, n) {
    let r = (call.apply(n, args) === count);
    console.assert(r, `Found items count: ${count}`);
    if (!r) throw "Test failed!";
}