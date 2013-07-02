var Looper = function(lb,ub,nestlevel,currentlevel, work, loopVals){

   for(var i = lb; i < ub; i++){
       loopVals[currentlevel] = i;
       if(currentlevel != nestlevel){
          Looper(lb,ub,nestlevel,currentlevel+1,work,loopVals);
       } else {
          work(loopVals);
       }
   }
}

var LooperWrapper = function(lb,ub,nestlevel,work){
    Looper(lb,ub,nestlevel,0,work,[]);
}