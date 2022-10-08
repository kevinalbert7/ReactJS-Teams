import React from 'react'

import './App.css'
import Counter from './components/Counter'
import TeamInfo from './components/TeamInfo'
import teams from './teams.json'

class App extends React.Component {
    constructor () {
    super ()
    
    this.state = {
      count: 1
    }
  }
  
  handlePlusClick = () => {
    if (this.state.count < 100) {
      this.setState({ count: this.state.count + 1 })
    }
  } 
  
  handleMinusClick = () => {
    if (this.state.count > 1) {
      this.setState({ count: this.state.count - 1 })
    }
  }

  render () {
    return (
      <>
        <Counter 
          count={this.state.count} 
          increment={this.handlePlusClick} 
          substract={this.handleMinusClick}
        />
        <div className='container'>
          {teams.map((id, index) => {
            if (index < this.state.count) {
              return <TeamInfo team={id} index={this.state.count}/>
            }
          }
          )}
        </div>
      </>
    )
  }

}

export default App
