export default function Courses() {
const courses = ["Javascript", "HTML", "CSS"];

const renderUI = () => {
return (
  <ul>
  {courses.map(courses, index) => {
    console.log(<li>{course}</li>);
  })}
</ul>;
};
}