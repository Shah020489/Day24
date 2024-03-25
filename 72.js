"use strict";
/***
 
**Question 72:** Block Scope with `let` and `const`: Demonstrate block scope by creating a code block with `{}` that uses both `let` and `const`. Show how variables declared inside the block are not accessible outside of it.

**Explain & TIP:** Block scope, created by `{}` in JavaScript, confines `let` and `const` variables to that block, enhancing code organization and preventing accidental access from outside the block.

*/
{
    let blockScopeVariable = 10;
    const blockScopeConstant = 20;
    console.log("This is only visiable inside the block " + blockScopeVariable);
    console.log("This is only visiable inside the block " + blockScopeConstant);
}
// try{
//     console.log("This is not visiable outside the block "+blockScopeVariable);
// }
// catch(e){
//     console.log("This is only visiable outside the block "+e);
// }
// try{
//     console.log('This is not visible outside the block'+blockScopeConstant);
// }
// catch(e){
//     console.log("This is only visiable outside the block "+e);
// }
