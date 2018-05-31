import React, { Component } from 'react';
import { Header, Image, Container, Button, Sidebar, Menu, Segment, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


class About extends Component {
  state={ visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    return (
      <div className="background">
        <Sidebar.Pushable >
          <Sidebar style={styles.navHeaders}
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
              <Button circular icon="bars" style={{ float: 'right', margin:'10px', color: 'rgb(114, 166, 96)'}} onClick={this.toggleVisibility} />
              <Header as="h1" textAlign="right" style={styles.pageHeaders}>About</Header>
              <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column  width={6}>
              <Image
                bordered
                rounded
                size='medium'
                src='../images/bio.PNG'
              />
            </Grid.Column>
            <Grid.Column width={10}>
              <Container style={{padding:'10px', fontSize: '20px', fontFamily: 'buda', backgroundColor: 'rgba(250, 250, 250, .6)'}} textAlign="left">
                <p>Hey I'm Lindsay Block. I was born and raised in Salt Lake City, Utah.</p>
                <p>I am new to the web development world. I could never figure out what I wanted to do with my life, I was a personal trainer,
                  I worked in a restaurant, I was a receptionist, and I did nails for a short time. I had a shoulder injury which led to surgery and afterward physical therapy and that
                  is when I decided to go to school to be a Physical Therapist Assistant. I worked as a PTA with a hand and upper extremity specialist for 2 years. I loved the job, it was very rewarding
                  being able to help people regain the use of their limbs, but something was missing. It was hard to get time off, it was hard on my own body and hands, and I didn't make great money. I just felt like I wanted to do something different.
                  This is when I decided to learn to code. So in February 2018 I up and quit my full time job as a PTA and I took a bootcamp through DevPoint Labs. I totally loved it!
                </p>
                <p>In my spare time I like to hike, mountain bike, and go to the gym.
                  I have a serious case of wanderlust. If I could I would be gone in a foreign country every day. So far I have visited
                  Egypt, Spain, France, Italy, The Netherlands, Ireland, Northern Ireland, Germany, Mexico, Canada, Grand Cayman,
                  Jamaica, and the Bahamas. Last year I started making a goal for myself to travel to at least 3 countries per year.
                </p>
              </Container>
            </Grid.Column>
            </Grid.Row>
          </Grid>
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
    backgroundColor: 'rgb(195, 191, 191)'
  }
}

export default About;
