import { Grid, GridItem } from '@chakra-ui/react'
import { Show, Hide } from '@chakra-ui/react'
import NavBar from './compounent/navbar'
import { Image } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import image1 from './assets/campaign-creators-gMsnXqILjp4-unsplash.jpg'

function App() {
  return <Grid templateAreas={{
    base:`"nav" "main"`,
    lg:`"nav nav" "aside main"`
  }}>
    <GridItem area='nav'><NavBar/></GridItem>
    <Show above="lg">
    <GridItem area='aside'>Aside</GridItem>
    </Show>
    {/* <GridItem area='main'><Carousel/></GridItem> */}
    {/* <GridItem area='main'>Main</GridItem>  */}
    <GridItem area='main'><Box width={'60%'} float={'right'}>
  <Image src={image1} alt='Dan Abramov' />
</Box> </GridItem>   
    </Grid>
}
export default App
