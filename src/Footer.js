import React, { Component } from 'react';
import { Header, Image, Container, Sidebar, Icon, Button, Menu, Segment, Grid, Divider} from 'semantic-ui-react';
import { Link } from 'react-router-dom'

class Footer extends Component {

  render () {
    return (
      <div>
        <Segment vertical style={{ padding: '2em',backgroundColor: "rgb(246, 245, 245)",  }}>
         <Container textAlign="center">
           <div>
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
             <Menu fluid secondary style={{width: '100%'}}>
              <Link to='/about'>
                <Menu.Item style={styles.navHeaders} name='services'>About</Menu.Item>
              </Link>
              <Link to='/projects'>
                <Menu.Item style={styles.navHeaders} name='photos'>Projects</Menu.Item>
              </Link>
              <Link to='/contact'>
                <Menu.Item style={styles.navHeaders} name='faq'>Contact</Menu.Item>
              </Link>
            </Menu>
           </div>
         </Container>
         <Divider />
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
    backgroundColor: 'rgb(246, 245, 245)'
  }
}

export default Footer;
