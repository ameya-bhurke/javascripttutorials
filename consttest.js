"use strict";

const THIS_IS_A_CONSTANT = "Constant";
let thisIsNotAConstant = "IChange";

thisIsNotAConstant = "Ichanged";

// should fail
THIS_IS_A_CONSTANT = "I tried to change";