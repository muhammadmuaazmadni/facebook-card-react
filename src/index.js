import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'


function Hi (props) {
  return <div className="name">
    {/* <strong>Hello{props.mame}</strong>
    <div className="center">
<h3>Some Info</h3>
<ul>
<li>Name :{props.name}</li>
<li>F Name :{props.fname}</li>
<li>Age :{props.age}</li>
<li>Email :{props.email}</li>

</ul>
<ul>
<h3>Some Math Operation</h3>
  <li>Add :{props.add}{10+10}</li>
  <li>Minus :{props.minus}{20-10}</li>
  <li>multiply :{props.multiply}{3*5}</li>

</ul>



    </div> */}
    <ul>
      <li><h2> Title{props.title} </h2></li>
      <li><p> Text {props.text}</p></li>
      <li>Imageurl<img src={props.image} /></li>

    </ul>
    <ul>
      <li><h2> Title{props.title} </h2></li>
      <li><p> Text {props.text}</p></li>
      <li>Imageurl<img src={props.image} /></li>

    </ul>
  </div>
}
ReactDOM.render(
  <>
<Hi title="alone but happy" text="live happily" image="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg" name="muaaz" fname="abdul qadir" age="21" email="muhammadmuaazmadni@gmail.com" add="{10+10}" minus="{20-10}" multiply="{3*5}" />
</>,
 document.querySelector('#root'));
