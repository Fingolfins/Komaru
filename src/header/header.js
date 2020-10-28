import React from 'react';
import BackgroundAnimate from './background'
import styles from './header.module.css';
import picture from './tngan.jpg';

const Form = () => {
    const info = ['First name', 'Last name', 'Email']
    const inputForm = info.map((i) => 
      <input key={i} placeholder={i} className={styles.input} />)
    return (
    <div >
      <h1>Subscribe</h1>
      <p >Sign up with your email address to receive news and updates!</p>
      <div>{inputForm}</div>
      <div><button className={styles.subcribe}>Subscribe</button></div>
    </div>
    )
}
const Avatar = (props) => {
  const {image} = props.props.catMode
  console.log(image)
  return  <img src={picture} alt=' '></img>
  }

const Header = (props) => {
    return (
      <div className={styles.header}>
        <BackgroundAnimate />
        <Avatar props={props}/>
        <Form />        
      </div>
    )
}
export default Header;