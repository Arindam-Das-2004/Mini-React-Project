import './App.css'
import ContactForm from './Component/ContactForm/ContactForm';
import ContactHeader from './Component/ContactHeader/ContactHeader';
import Navigation from './Component/Navigation/Navigation';
function App() {

  return (
    <div>
      <Navigation />
     
      <main className='main_container'>
     <ContactHeader />
      <ContactForm />
      </main>
    </div>
  );

}

export default App
