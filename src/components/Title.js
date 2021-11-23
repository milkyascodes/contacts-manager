import React from 'react'
import { Header, Icon, Image } from 'semantic-ui-react'

function Title(){
  return(
    <div>
        <Header as='h2' icon textAlign='center'>
            <Icon name='users' circular />
            <Header.Content>Friends</Header.Content>
        </Header>
    </div>
  )
}

export default Title