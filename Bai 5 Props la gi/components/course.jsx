export default function Courses() {
const courses = [
{
  name: 'Javascript',
  price: '1000',
},
{
  name:'HTML',
  price:'500',
},
{
  name:'CSS',
  price:'200',
}
]

return<div>
<ul>
  {courses.map(courses, index) =>(
    return <li>name: {courses.name}</li>
  )}
</ul>
</div>

}