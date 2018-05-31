import React, { Component } from 'react';
import { Header, Image, Container, Sidebar, Icon, Button, Menu, Segment, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

class Home extends Component {
  state={ visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    return (
      <div className="background">
        <Sidebar.Pushable  >
          <Sidebar
            style={styles.navHeaders}
            as={Menu}
            animation='push'
            width='thin'
            direction='right'
            visible={visible}
            icon='labeled'
            vertical

            >
            <Menu.Item name='home'>
              <Link style={{color:'rgb(114, 166, 96)'}} to="/">
                Home
              </Link>
            </Menu.Item>
            <Menu.Item name='about'>
              <Link  style={{color:'rgb(114, 166, 96)'}} to='/about'>
                About
              </Link>
            </Menu.Item>
            <Menu.Item name='projects'>
              <Link style={{color:'rgb(114, 166, 96)'}} to='/projects'>
                Projects
              </Link>
            </Menu.Item>
            <Menu.Item name='contact'>
              <Link  style={{color:'rgb(114, 166, 96)'}} to='/contact'>
                Contact
              </Link>
            </Menu.Item>
            </Sidebar>
            <Sidebar.Pusher>
            <Segment basic>
              <Button circular icon="bars" style={{ float: 'right', margin:'10px', color: 'rgb(114, 166, 96)'}} onClick={this.toggleVisibility} />
              <Image src="../images/logo.png" size="massive" centered style={{marginTop:'100px', marginLeft:'300px'}}/>
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
    fontFamily: 'Paprika',
    fontSize: '20px',
    backgroundColor: 'rgb(246, 245, 245)',
  }
}

export default Home;
