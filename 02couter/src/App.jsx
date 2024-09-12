import './App.css'
// import Counter from './Components/Counter'
import TailwindAndProps from './Components/TailwindAndProps'
const ItemName = ['MacBook','Mac','IPhone','Apple','Laptop']
function App() {

  return (
    <>
     {/* <Counter/> */}
     <div className="flex flex-wrap gap-2 justify-center">

     { 
      ItemName.map((ItemName,index) => <TailwindAndProps key={index}  ItemName={ItemName} />)
     }
     </div>
     
    </>
  )
}

export default App
