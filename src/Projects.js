import React, { Component } from 'react';
import { Header, Image, Container, Sidebar, Icon, Button, Menu, Segment, Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom'


class Projects extends Component {
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
              <Button circular icon="bars" style={{ float: 'right', margin:'10px', color: 'rgb(60, 172, 165)'}} onClick={this.toggleVisibility} />
              <Header as="h1" textAlign="right" style={styles.pageHeaders}>Projects</Header>
            </Segment>
            <Card.Group stackable centered itemsPerRow={3} style={{ margin: '10px', fontFamily: 'buda', fontSize: '1.33em'}}>
            <Card centered>
              <Image src='../images/sassy.JPG' />
              <Card.Content>
                <Card.Header style={styles.cardHeaders}>
                  Sassy Lash & Esthetics
                </Card.Header>
                <Card.Meta>
                  <span className='date'>
                    In Progress
                  </span>
                </Card.Meta>
                <Card.Description>
                  Site I did for my friend's eyelash extension business.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name='desktop' />
                  www.sassylash.com
                </a>
              </Card.Content>
            </Card>
            <Card centered>
              <Image src='../images/sassy.JPG' />
              <Card.Content>
                <Card.Header style={styles.cardHeaders}>
                  Can Duu
                </Card.Header>
                <Card.Meta>
                  <span className='date'>
                    In progress
                  </span>
                </Card.Meta>
                <Card.Description>
                  Portfolio project that I contributed to for school.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a href='/contact'>
                  <Icon name='desktop' />
                  Ask me for details!
                </a>
              </Card.Content>
            </Card>
          </Card.Group>
          <Header as="h3" textAlign="center" style={{fontFamily:'Paprika'}}>See my <a href='https://github.com/lindsblock'>Github</a> for more of my work!</Header>
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
    backgroundColor: 'rgb(195, 191, 191)'
  },

  cardHeaders: {
    fontFamily: 'Paprika',
    fontSize: '20px',
  }
  }

export default Projects;
