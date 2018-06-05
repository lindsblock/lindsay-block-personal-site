import React, { Component } from 'react';
import { Header, Image, Container, Sidebar, Icon, Button, Menu, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom'


class Contact extends Component {
  state={ visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    return (
      <div className="background">
        <Sidebar.Pushable >
          <Sidebar
            style={styles.navHeaders}
            as={Menu}
            animation='push'
            width='thin'
            direction='right'
            visible={visible}
            icon='labeled'
            vertical
            inverted
            >
            <Menu.Item name='home'>
              <Link style={{color:'rgb(114, 166, 96)'}} to="/">
                Home
              </Link>
            </Menu.Item>
            <Menu.Item name='about'>
              <Link style={{color:'rgb(114, 166, 96)'}} to='/about'>
                About
              </Link>
            </Menu.Item>
            <Menu.Item name='projects'>
              <Link style={{color:'rgb(114, 166, 96)'}} to='/projects'>
                Projects
              </Link>
            </Menu.Item>
            <Menu.Item name='contact'>
              <Link style={{color:'rgb(114, 166, 96)'}} to='/contact'>
                Contact
              </Link>
            </Menu.Item>
            </Sidebar>
            <Sidebar.Pusher>
            <Segment basic>
              <Button circular icon="bars" style={{ float: 'right', margin:'10px', color: 'rgb(114, 166, 96)'}} onClick={this.toggleVisibility} />
              <Header as="h1" textAlign="right" style={styles.pageHeaders}>Contact</Header>
              <Container textAlign="center">
                <a href="https://www.facebook.com/lindsay.wolthuis">
                  <Button size="huge" circular color='facebook' icon='facebook' />
                </a>
                  <a href="https://www.linkedin.com/in/lindsay-block0805">
                  <Button size="huge" circular color='linkedin' icon='linkedin' />
                </a>
                <a href="https://github.com/lindsblock">
                  <Button size="huge" circular color="black" icon='github' />
                </a>
                <Container style={{backgroundColor: 'rgba(250, 250, 250, .6)', margin:'20px', padding:'10px'}}>
                <Header as="h3" textAlign="center" style={{fontFamily:'Marcellus', fontSize:'30px'}} >Email Me</Header>
                <Header as="h3" textAlign="center" style={{fontFamily:'Buda', fontSize:'30px'}}>lindsay.block05@gmail.com</Header>
                </Container>
              </Container>
            </Segment>
           </Sidebar.Pusher>
         </Sidebar.Pushable>
      </div>
    );
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
export default Contact;
