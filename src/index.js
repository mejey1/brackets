module.exports = function check(str, bracketsConfig) {
  let strbracketsConfig = [];
   for(let el of bracketsConfig) {
     strbracketsConfig.push(el[0]+el[1]);
   }
 
  let example = str;
  let flag = 0;
  while(example.length >1){
   for(let el of strbracketsConfig)  {
     example = example.replace(el, "");
   }
   if(example.length == flag && flag != 0) return false;
   flag = example.length;
  }
   return example.length == 0? true: false;
 }