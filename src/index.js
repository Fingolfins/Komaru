import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.module.css';
import Header from './header/header';
import Main from './main/main';

class App extends React.Component {
  state = {
    image: 'https://i.pinimg.com/originals/40/0e/26/400e26ec57d9de98e03902ef4fc7b22f.jpg',
    color: 'white',   
  }
  catMode = this.state
  toggleKomugi = () => {
    this.setState({
      image: 'https://i.pinimg.com/originals/40/0e/26/400e26ec57d9de98e03902ef4fc7b22f.jpg',
      color: 'white',  
    })
  }
  toggleKomaru = () => {
    this.setState({
      image: '',
      color: 'white', 
    })
  }
  toggleCocoa = () => {
    this.setState({
      image: 'https://www.tiktok.com/api/img/?itemId=6835631478458633474&location=0',
      color: 'white',   
    })
  }
  static getDerivedStateFromProps(props, state) {
    console.log('komaru is meowing')
    return {}
  }
  render() {
    return (
      <div>        
        <div className={styles.app}>
          <div><Header catMode={this.catMode}/></div>
          <div><Main 
            toggleKomugi={this.toggleKomugi} 
            toggleKomaru={this.toggleKomaru} 
            toggleCocoa={this.toggleCocoa} 
            />
          </div>               
        </div>       
      </div>
    )
  }
};
ReactDOM.render(<App />, document.getElementById('root'));
