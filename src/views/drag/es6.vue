<template>

</template>
<script>
// function* demo() {
//   //console.log('Hello' + yield); // SyntaxError
//   //console.log('Hello' + yield 123); // SyntaxError

//   console.log('Hello' + (yield)); // OK
//   console.log('Hello' + (yield 123)); // OK
// }
// var aa = demo();
// aa.next();
// aa.next();
// aa.next();
//   function* objectEntities(obj) {
//     let propKeys = Reflect.ownKeys(obj);
//     for(let propKey of propKeys){
//       yield [propKey, obj[propKey]]
//     }
//   }
//   let Jane = {first: 'Jane', last: 'Joe'}
//   for(let [key, value] of objectEntities(Jane)) {
//       console.log(`${key}:${value}`)
//   }
//   function* numbers() {
//     let file = new FileReader("numbers.txt");
//     try {
//       while(!file.eof) {
//         yield parseInt(file.readLine(), 10);
//       }
//     } finally {
//       file.close();
//     }
//   } 
//   let aa = numbers()
//   aa.next()

//   //
// function* longRunningTask(value1) {
//   try {
//     var value2 = yield step1(value1);
//     var value3 = yield step2(value2);
//     var value4 = yield step3(value3);
//     var value5 = yield step4(value4);
//     // Do something with value4
//   } catch (e) {
//     // Handle any error from step1 through step4
//   }
// }
// scheduler(longRunningTask(initialValue));

// function scheduler(task) {
//   var taskObj = task.next(task.value);
//   // 如果Generator函数未结束，就继续调用
//   if (!taskObj.done) {
//     task.value = taskObj.value
//     scheduler(task);
//   }
// }
//
</script>