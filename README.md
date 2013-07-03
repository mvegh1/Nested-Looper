Nested-Looper
=============

Writes nested loop for you!

Test on AMD 2 core cpu:

Looper test complete ========== Time: 77301=========== Iters: 16777216 
Straight test complete ========== Time: 79704=========== Iters: 16777216 

How to use:

call LooperWrapped( loopLowerBound, loopUpperBound, nestSizeOfLoop , callback );

That's it!

Ex:
 
LooperWrapper(0,3,2, callback);

This is equivalent to:

for(var i = 0; i < 3; i++){

   for(var j = 0; j < 3; j++){
   
       callback([i,j]);
  }


}
