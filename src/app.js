import './styles/main.scss';
import './static/img/beglogo.jpg';

const validar = (text)=>{
    try{
        JSON.parset(text);
        return true;
    }catch{
        return false;
    }
};

console.log(validar('test'));