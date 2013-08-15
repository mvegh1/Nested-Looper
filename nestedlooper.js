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


/*** Loop through jagged arrays, now with the option to pass along data and perform callbacks before reaching the deepest nesting ****/



var Looper2 = function (arr, currentLevel, loopVals, midWork, endWork, data) {

    for (var i = 0; i < arr[currentLevel].length; i++) {
        loopVals[currentLevel] = i;
        if (currentLevel != arr.length - 1) {
            midWork(loopVals, data);
            Looper2(arr, currentLevel + 1, loopVals, midWork, endWork, data);
        } else {
            endWork(loopVals, data);
        }
    }

}

var ArrayLoop = function(arr,midWork,endWork,data) {
   
   Looper2(arr,0,[],midWork,endWork,data);
}

ArrayLoop(x, 
    function (i, d) {
        d.iteration++;
        console.log(d)
    }, 
    function (i, d) {
        console.log(i)
    }, 
    {
        "iteration": 0
    }
   );
