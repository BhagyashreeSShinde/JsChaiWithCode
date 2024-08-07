
const accountId=12334
let accountEmail="bshinde@gmail.com"
/*by using var facing so probelm if some one change actual value also change thats why used let 
scope means {}
prefer not to used var in block scope and functional scope*/
var accountPassword="1234"
accountCity="pune"
let accountState;
//accountId=2

accountEmail="bkarpe@gmail.com"
accountPassword="21212121"
accountCity="gunat"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
