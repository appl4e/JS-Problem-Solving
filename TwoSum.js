// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// O(n2) solution
function TwoSum(nums, target){
  for(i=0; i< (nums.length - 1 ); i++){
    for(j= i+1; j< nums.length; j++){
      if((nums[i] + nums[j]) === target){
        return [i, j];
      }
    }
  }
}

// O(n) solution
function TwoSumON(nums, target){

  const map = new Map();

  for(i=0; i<nums.length; i++){
    const num2 = target - nums[i];
    if(map.has(num2)){
      return [map.get(num2), i];
    }
    else{
      map.set(nums[i], i);
    }
  }
}


console.log(TwoSumON([2,7,11,15], 9));