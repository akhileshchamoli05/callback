function task1(task2) {
    setTimeout(() => {
        console.log("Task 1 is completed")
        task2()
    }, 3000)
}
function task2(task3) {
    setTimeout(() => {
        console.log("Task 2 is completed")
        task3()
    }, 2000)
}
function task3() {
    setTimeout(() => {
        console.log("Task 3 is completed")
    }, 1000)
}



function print() {
    task1(()=>{
        task2()
    })
    
   
}


print()