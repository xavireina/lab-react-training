import './Greetings.css';

function Greetings(props) {

    const { lang, children } = props;
  
    if (lang === 'de') {
        
        return <div className='Greetings'><small className='lang'>Hallo {children}</small></div>
    }if (lang === 'en') {
        return <div className='Greetings'><small className='lang'>Hello {children}</small></div>
    }if (lang === 'es') {
        return <div className='Greetings'><small className='lang'>Hola {children}</small></div>
    }if (lang === 'fr') {
        return <div className='Greetings'><small className='lang'>bonjour {children}</small></div>
    }

}


export default Greetings;