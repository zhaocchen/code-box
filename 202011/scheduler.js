// JS实现一个带并发限制的异步调度器Scheduler，
// 保证同时运行的任务最多有两个。
// 完善代码中Scheduler类，
// 使得以下程序能正确输出

class Scheduler {
    constructor (maxCount) {
        this.maxCount = maxCount || 2;
        this.taskList = [];
        this.process = [];
    }

	add(promiseCreator) {
        this.taskList.unshift(promiseCreator)
        return this.start();
    }

    start () {
        if (this.process.length < this.maxCount && this.taskList.length > 0) {
            let task = this.taskList.pop();
            let promise = task().then(() => {
                let index = this.process.indexOf(promise);
                this.process.splice(index, 1);
            });
            this.process.push(promise);
            return promise;
        } else {
            return Promise.race(this.process).then(() => this.start());
        }
    }
}

const timeout = (time) => new Promise(resolve => {
	setTimeout(resolve, time)
})

const scheduler = new Scheduler();

const addTask = (time, order) => {
	scheduler.add(() => timeout(time)).then(() => console.log(order))
}

addTask(1000, '1');
addTask(500, '2');
addTask(300, '3');
addTask(400, '4');

// output: 2 3 1 4
// 一开始， 1， 2两个任务进入队列
// 500ms时， 2完成， 输出2， 任务3进队
// 800ms时， 3完成， 输出3， 任务4进队
// 1000ms时， 1完成， 输出1