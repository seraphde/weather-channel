import './App.css'
import Time from './components/Time';
import TopButtons from './components/TopButtons';
import Input from './components/input';
    

    function app(){
        return (
    < div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
            <TopButtons /> 
    
            <Input  />
          
            
             <Time/>
         
    </div>

    );

}
export default app