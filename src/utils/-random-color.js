export default function RandomColor() {
    const [x, setX] = useState('');
    let string = '0123456789abcdef';
    let color = '';  
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * string.length);
      color += string[index];
    }
    const hexColor = '#' + color  
    return (
    <div style={{backgroundColor: x, textAlign: 'center', height: '40px'}}>
      <button style={{border: '0px solid', backgroundColor: hexColor}} onClick={() => setX(hexColor)}>{hexColor}</button>
    </div>)
  }

