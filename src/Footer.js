import React, { Component } from 'react';
import { Container, Icon, Button, Menu, Segment, Divider, Header} from 'semantic-ui-react';
import { Link } from 'react-router-dom'

class Footer extends Component {

  render () {
    return (
      <div>
        <Segment  vertical style={{ alignItems: "center", padding: '2em', backgroundColor: "rgb(246, 245, 245)"}}>
         <Container textAlign="center">
             <Divider />
             <a href="https://www.facebook.com/lindsay.wolthuis">
               <Button size="huge" circular color='facebook' icon='facebook' />
             </a>
               <a href="https://www.linkedin.com/in/lindsay-block0805">
               <Button size="huge" circular color='linkedin' icon='linkedin' />
             </a>
             <a href="https://github.com/lindsblock">
               <Button size="huge" circular color="black" icon='github' />
             </a>
            <Menu secondary widths={6}>
                <a  style={{padding:'10px'}} href="/about">
                <Header style={styles.navHeaders} as="h3">About</Header>
              </a>
              <a style={{padding:'10px'}}  href="/projects">
                <Header style={styles.navHeaders} as="h3">Projects</Header>
              </a>
              <a style={{padding:'10px'}}  href="/contact">
                <Header style={styles.navHeaders} as="h3">Contact</Header>
              </a>
            </Menu>
         </Container>
       </Segment>
      </div>
    )

  }
}
const styles = {
  pageHeaders: {
    fontFamily: 'Tangerine',
    fontSize: '100px',
    marginRight: '20px',
    paddingTop: '10px',
  },
  navHeaders: {
    fontFamily: 'Marcellus',
    fontSize: '20px',
    backgroundColor: 'rgb(246, 245, 245)',
    color:'rgb(114, 166, 96)'
  }
}

export default Footer;
