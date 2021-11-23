import React from 'react'
import {Button, Menu } from 'semantic-ui-react'

function MenuBar(){

  

  return (
    <Menu secondary>
      <Menu.Item
        name='home'
      />
      <Menu.Item
        name='messages' 
      />
      <Menu.Item
        name='friends'
      />
      <Menu.Menu position='right'>
        
        <Menu.Item>
          <Button>
            
          </Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )

}
export default MenuBar