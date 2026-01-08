import Accordion from './components/Accordion'
import ImageSlider from './components/image-slider'
import RandomColor from './components/random-color'
import StarRating from './components/star-rating'
const App = () => {
  return (
    <div>
    {/* <Accordion/>
      <RandomColor/> 
   <StarRating/>  */}
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={10}
      page={"1"}/>
    </div>
  )
}

export default App
