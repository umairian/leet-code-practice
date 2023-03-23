function bubbleSort(nums) {
    let count = 1;
    for(let i = 0; i < nums.length - 1; i++) {
        for(let j = 0; j < nums.length - i - 1; j++) {
            if(nums[j] > nums[j+1]) {
                const temp = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = temp;
            }
        }
    }
    console.log(count)
    return nums;
}

console.log(bubbleSort([7, 0, -8, -2, 76, 32, 1]))