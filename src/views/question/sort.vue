<template>
    
</template>
<script>
export default {
    methods: {
        bubbleSort(arr){
            for(let i = 0;i < arr.length - 1;i++){
                for(let j = 0; j < arr.length - 1 - i;j++){
                    if(arr[j] > arr[j + 1]){
                        let temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j+1] = temp;
                    }
                }
            }
            console.log(arr);
            return arr;
        },
        selectionSort(arr){
            var minIndex,temp;
            for(let i = 0;i < arr.length - 1;i++){
                minIndex = i;
                for(let j = i + 1; j < arr.length;j++){
                    if(arr[j] < arr[i]){
                        minIndex = j;
                    }
                }
                temp = arr[i];
                arr[i] = arr[minIndex];
                arr[minIndex] = temp;
            }
            console.log(arr);
            return arr;
        },
        insertionSort(){
            var len = arr.length;
            var preIndex, current;
            for (var i = 1; i < len; i++) {
                preIndex = i - 1;
                current = arr[i];
                while (preIndex >= 0 && arr[preIndex] > current) {
                    arr[preIndex + 1] = arr[preIndex];
                    preIndex--;
                }
                arr[preIndex + 1] = current;
            }
            console.log(arr);
            return arr;
        },
        shellSort(arr){
            var len = arr.length;
            for (var gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
                // 注意：这里和动图演示的不一样，动图是分组执行，实际操作是多个分组交替执行
                for (var i = gap; i < len; i++) {
                    var j = i;
                    var current = arr[i];
                    while (j - gap >= 0 && current < arr[j - gap]) {
                        arr[j] = arr[j - gap];
                        j = j - gap;
                    }
                    arr[j] = current;
                }
            }
            return arr;
        },
        mergeSort(arr) {
            var len = arr.length;
            if (len < 2) {
                return arr;
            }
            var middle = Math.floor(len / 2),
                left = arr.slice(0, middle),
                right = arr.slice(middle);
            return this.merge(this.mergeSort(left), this.mergeSort(right));
        },
        
        merge(left, right) {
            var result = [];
        
            while (left.length>0 && right.length>0) {
                if (left[0] <= right[0]) {
                    result.push(left.shift());
                } else {
                    result.push(right.shift());
                }
            }
        
            while (left.length)
                result.push(left.shift());
        
            while (right.length)
                result.push(right.shift());
        
            return result;
        }            
    },
    created(){
        let arr = [54,2,26,15,36,44,101,3,4,8,15,4,33];
        // console.log(arr.sort());
        // this.bubbleSort(arr);
        // this.selectionSort(arr);
        this.mergeSort(arr);
    }
}
</script>