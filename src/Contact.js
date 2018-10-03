import React, { Component } from 'react';
import { Header, Image, Container, Sidebar, Icon, Button, Menu, Segment, Divider, Grid } from 'semantic-ui-react';
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
              <Segment textAlign="center" style={{padding:'50px', margin: '150px 200px 150px 200px', backgroundColor: 'rgb(246, 245, 245, .7)'}}>
                <Header as="h1" style={{fontFamily: 'Marcellus', color:'rgb(114, 166, 96)'}}>
                  Let's Create Something!
                </Header>
              <Divider />
              <Grid stackable>
                <Grid.Column width={6}>
                  <Image
                    bordered
                    circular
                    size='medium'
                    src='../images/coding.jpeg'
                  />
                </Grid.Column>
                <Grid.Column width={10} verticalAlign="middle">
                  <p style={{fontFamily:'Marcellus', fontSize:'20px'}}>
                    If you like my work and need a site or would like to collaborate on a project, find me on social media or message me below!
                  </p>
                  <p style={{fontFamily: 'Marcellus', fontSize:'20px'}}>
                    Also, make sure you check out my Github for more of my work.
                  </p>
                  <a href="https://www.facebook.com/lindsay.wolthuis">
                    <Button size="huge" circular color='facebook' icon='facebook' />
                  </a>
                    <a href="https://www.linkedin.com/in/lindsay-block0805">
                    <Button size="huge" circular color='linkedin' icon='linkedin' />
                  </a>
                  <a href="https://github.com/lindsblock">
                    <Button size="huge" circular color="black" icon='github' />
                  </a>
                  <br />
                  <br />
                  <Button style={styles.navHeaders}>
                    <a style={{color:'rgb(114, 166, 96)'}} href="mailto:lindsay.block05@gmail.com?Subject=Hello" target="_top">Say Hi!</a>
                  </Button>
                </Grid.Column>
              </Grid>
              </Segment>
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
      backgroundColor: 'rgb(246, 245, 245)',
    }
  }
export default Contact;
