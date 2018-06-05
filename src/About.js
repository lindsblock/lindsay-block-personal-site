import React, { Component } from 'react';
import { Header, Image, Container, Button, Sidebar, Menu, Segment, Grid, List, Divider } from 'semantic-ui-react';
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
            <Segment style={{marginBottom:'50px'}} basic>
              <Button circular icon="bars" style={{ float: 'right', margin:'10px', color: 'rgb(114, 166, 96)'}} onClick={this.toggleVisibility} />
              <Header as="h1" textAlign="right" style={styles.pageHeaders}>About</Header>
              <Grid container stackable verticalAlign='middle'>
                <Grid.Row style={{marginBottom:'20px'}}>
                  <Grid.Column  width={6}>
                    <Image
                      bordered
                      rounded
                      size='large'
                      src='../images/bio.PNG'
                    />
                  </Grid.Column>
                  <Grid.Column width={10}>
                    <Container style={{padding:'10px', fontSize: '20px', fontFamily: 'buda', backgroundColor: 'rgba(250, 250, 250, .6)'}} textAlign="left">
                      <Header as="h2" style={{fontFamily:'Marcellus'}}>My Background</Header>
                      <p>Hey, I'm Lindsay Block. I was born and raised in Salt Lake City, Utah.</p>
                      <p>I could never figure out what I wanted to when I grew up (and heck I probably still don't know what I want to do when I grow up). I have been a personal trainer,
                        I worked in a restaurant, I was a receptionist, and I did nails for a short time. I liked and disliked each of those things for different reasons, but I wanted to do something I totally loved. One year I had a shoulder injury which led to surgery and afterward physical therapy and that
                        is when I decided to go to school to be a Physical Therapist Assistant. I graduated from SLCC  with a 3.96 GPA and with my Associate's degree in Physical Therapist Assiting as well as an Associate's in General Education. I worked as a PTA with a hand and upper extremity specialist for the last 2 years. I loved the job, it was very rewarding
                        being able to help people regain the use of their limbs, but something was missing. It was hard to get time off, it was hard on my own body and hands, and I didn't make great money. I needed a change!
                      </p>
                    </Container>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Grid container stackable verticalAlign='middle'>
                <Grid.Row style={{marginBottom:'20px'}}>
                  <Grid.Column width={10}>
                    <Container style={{padding:'10px', fontSize: '20px', fontFamily: 'buda', backgroundColor: 'rgba(250, 250, 250, .6)'}} textAlign="left">
                      <Header as="h2" style={{fontFamily:'Marcellus'}}>Coding Story and Skills</Header>
                      <p>I am brand new to the development world. I had heard about coding, but I literally didn't know anything about it
                        aside from the fact that you build websites and it was hard. So I researched a little bit and thought about doing it for about a year but I never had the time, the funds,
                        and let's face it, it is terrifying quitting your job and not making any money for a while. Finally in February 2018 I up and quit my full time job as a PTA and I took a bootcamp through DevPoint Labs.
                        I totally loved it! I found myself excited to go to school every day and I really enjoyed what we were learning. This brings us to now. I am currently working on small projects on my own trying to gain
                        some practice as I am looking for internships or jobs. I think I have found what makes me happy and something that I will really love. I look forward to becoming a better developer and as I sit here writing my code for this
                        very site I am having a blast.
                      </p>
                      <p>
                        Skills I have learned...
                      </p>
                      <List bulleted>
                        <List.Item>JavaScript/ES6</List.Item>
                        <List.Item>HTML/CSS</List.Item>
                        <List.Item>Ruby</List.Item>
                        <List.Item>Ruby on Rails</List.Item>
                        <List.Item>React</List.Item>
                        <List.Item>Redux</List.Item>
                        <List.Item>PostgreSQL</List.Item>
                        <List.Item>Webpack</List.Item>
                        <List.Item>Git</List.Item>
                        <List.Item>Command Line</List.Item>
                        <List.Item>Semantic, Materialize, Bootstrap</List.Item>
                      </List>
                    </Container>
                  </Grid.Column>
                  <Grid.Column  width={6}>
                    <Image
                      bordered
                      rounded
                      size='large'
                      src='../images/coding.jpeg'
                    />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Grid container stackable verticalAlign='middle'>
                <Grid.Row>
                  <Grid.Column  width={6}>
                    <Image
                      bordered
                      rounded
                      size='large'
                      src='../images/amsterdam.JPG'
                    />
                  </Grid.Column>
                  <Grid.Column width={10}>
                    <Container style={{padding:'10px', fontSize: '20px', fontFamily: 'buda', backgroundColor: 'rgba(250, 250, 250, .6)'}} textAlign="left">
                      <Header as="h2" style={{fontFamily:'Marcellus'}}>What I Do For Fun</Header>
                      <p>In my spare time I like to hike, mountain bike, and go to the gym.</p>
                      <p>I have a serious case of wanderlust. If I could I would be gone in a foreign country every day. So far I have visited
                        Egypt, Iceland, England, Spain, France, Italy, The Netherlands, Ireland, Northern Ireland, Germany, Mexico, Canada, Grand Cayman,
                        Jamaica, and the Bahamas. I started making a goal for myself to travel to at least 3 countries per year. So far I have kept it up!
                      </p>
                      <p>I am starting to get into photography a little bit,
                        though I know nothing about it and I definitely need to take some classes. I'd really like to learn
                        some Photoshop skills as well, but for now I just like taking pictures for fun!
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
    fontFamily: 'Marcellus',
    fontSize: '20px',
    backgroundColor: 'rgb(246, 245, 245)',
  }
}

export default About;
