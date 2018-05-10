import React, { Component } from 'react';
import { Header, Image, Container, Sidebar, Icon, Button, Menu, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom'


class Projects extends Component {
  state={ visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    return (
      <div className="background">
        <Button  onClick={this.toggleVisibility}>View</Button>
        <Sidebar.Pushable >
          <Sidebar
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
              <Link to="/">
                Home
              </Link>
            </Menu.Item>
            <Menu.Item name='about'>
              <Link to='/about'>
                About
              </Link>
            </Menu.Item>
            <Menu.Item name='projects'>
              <Link to='/projects'>
                Projects
              </Link>
            </Menu.Item>
            <Menu.Item name='contact'>
              <Link to='/contact'>
                Contact
              </Link>
            </Menu.Item>
            </Sidebar>
            <Sidebar.Pusher>
            <Segment basic>
              <Header as="h1" textAlign="right" style={styles.pageHeaders}>Projects</Header>
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
  }
  }

export default Projects;
