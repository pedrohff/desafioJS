import  {Form} from "@unform/web"; 
import Input from './components/Form/input';

const initialData = { // dados iniciais do backend
  email: "sergio@gmail.com",
}

export default function App() {

  function handleSubmit(data){
    console.log(data)
  }
  return (
   
      <div className="Login">
       <Form initialData={initialData} onSubmit={handleSubmit}>
          <Input name= "name" />
          <Input type="email" name= "email" />
          <Input type="password" name= "password" />

          <button type="submit">Enviar</button>

        </Form>
    </div>
    
    
  );
}
