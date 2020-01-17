function newTask(title, desciption) {
  const task = {
    title:title,
    desciption: desciption,
    complete: false,


    logState: function(){
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}

const task1 = newTask("Clean Cat Litter", "take all the poop  out of the litter box");
const task2 = newTask("Do Laundry", "blah");
const tasks = [task1, task2];

task1.logState();
task1.markCompleted();
task1.logState();

