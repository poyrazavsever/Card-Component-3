import './App.css';
import AuthorAbout from './Components/AuthorAbout';

function App() {
  return (
    <div className='flex justify-center items-center h-screen w-full bg-cyan-900'>
       <AuthorAbout 
        imageLink="Images/pp.jpg" 
        name="Poyraz Baba" 
        job="Front-end Developer" 
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia voluptatibus quod sint quas accusamus facere optio ab, nobis libero, tenetur quidem impedit? Obcaecati labore eveniet porro nemo unde, quisquam dolor.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia voluptatibus quod sint quas accusamus facere optio ab, nobis libero, tenetur quidem impedit? Obcaecati labore eveniet porro nemo unde, quisquam dolor.Lorem, ipsum"/>
    </div>
   
  );
}

export default App;
