var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// classes: public , protected, private 
var Lesson = /** @class */ (function () {
    function Lesson(type, length, title, description) {
        this.instances = 0;
        this.type = type;
        this.length = length;
        this.title = title;
        this.description = description;
        this.incInstances();
    }
    Lesson.prototype.incInstances = function () {
        this.instances++;
    };
    Lesson.prototype.getInstances = function () {
        return this.instances;
    };
    return Lesson;
}());
var VideoLesson = /** @class */ (function (_super) {
    __extends(VideoLesson, _super);
    function VideoLesson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VideoLesson.prototype.setDescription = function (desc) {
        this.description = desc;
        this.incInstances();
    };
    return VideoLesson;
}(Lesson));
var lesson = new Lesson('VideoCourse', 4, 'Intro', '');
//console.log(lesson.incInstances())
