//2/ REVIEW: Stopwatch
function Stopwatch(property_descriptor = { foo: 1, bar: 2 }) {
  this.property_descriptor = property_descriptor;
  let duration = 0;
  startTime, endTime, (running = false);
  this.start = () => {
    if (!running) {
      running = true;
    } else throw new Error('Stopwatch has already started');
    startTime = new Date();
  };
  this.stop = () => {
    if (running) running = false;
    else throw new Error('Stopwatch is not started');
    endTime = new Date();
    duration += (endTime.getTime() - startTime.getTime()) / 1000; // Có chia 1000 vì getTime trả về miliseconds
  };
  this.reset = () => {
    startTime = null;
    endTime = null;
    duration = 0;
    running = false;
  };
  Object.defineProperty(this, 'property_descriptor', {
    writable: false,
    enumerable: false,
    configurable: false,
  });
  // Getter & Setter
  Object.defineProperty(this, 'duration', {
    // sw.duration sẽ return duration ở dòng 57
    get() {
      return duration;
    },
    // sw.duration = 100 sẽ thay đổi duration ở dòng 57 -> 100
    set(value) {
      duration = value;
    },
  });
}
const sw = new Stopwatch();

//2/ Property Descriptor
// for (key of sw.property_descriptor) console.log(key); // JS báo lỗi vì enumerable: false
sw.property_descriptor = 'ba lap ba xam'; // Không có tác dụng vì writeable: false
delete sw.property_descriptor; // Không có tác dụng vì configurable: false
