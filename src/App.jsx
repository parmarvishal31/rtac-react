import Header from "./components/Header"
import StickyFooter from "./components/StickyFooter"

 function App() {
  return (
    <>
    <div className="relative h-[100vh] overflow-auto">
      <Header />
      <main>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, corporis.
      </main>  
    </div>
      <span className="sticky bottom-44  w-fit"><StickyFooter /></span>
    </>
  )
}

export default App