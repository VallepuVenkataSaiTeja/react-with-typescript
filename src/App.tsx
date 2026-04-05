import './App.css'
// import { UserCard } from './components/01_RequiredOptionalProps'
// import { GreetA, GreetB } from './components/02_DefaultProps'
import { Panel, RequiredChildrenProps } from './components/03_ChildrenReactNode'
import { Button } from './components/05_ComponentProps'

function App() {

  return (
    <>
      {/* <UserCard id={'1'} name='dev' subtitle={<p>dev testing</p>} />
      <GreetA />
      <GreetA name='Raj' />
      <GreetB name='Mr. Bean' /> */}
      <Panel title='Panel' children={
        <ul>
          <li>one</li>
        </ul>
      } />
      <RequiredChildrenProps title='hello'>
         some content here
      </RequiredChildrenProps>

      <Button variant='primary' onClick={()=>alert('clicked')}>Text</Button>
    </>
  )
}

export default App
