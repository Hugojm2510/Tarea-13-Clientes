import './App.css'
import CardContainer from './componentes/CardContainer '

const App = () => {
  return (
    <CardContainer>
      <div style={{ background: '#f0f0f0', padding: '20px', width: '150px', color: 'black' }}>Card 1</div>
      <div style={{ background: '#f0f0f0', padding: '20px', width: '150px', color: 'black' }}>Card 2</div>
      <div style={{ background: '#f0f0f0', padding: '20px', width: '150px', color: 'black' }}>Card 3</div>
    </CardContainer>
  );
};

export default App;
