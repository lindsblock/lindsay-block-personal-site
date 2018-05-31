import React, { Component } from 'react';
import { Header, Image, Container, Sidebar, Icon, Button, Menu, Segment, Grid, Divider} from 'semantic-ui-react';
import { Link } from 'react-router-dom'

class Footer extends Component {

  render () {
    return (
      <div>
        <Segment vertical style={{ padding: '2em',backgroundColor: "rgb(246, 245, 245)", color:'black' }}>
         <Container>
           <Grid  stackable>
             <Grid.Row>
               <Grid.Column width={11}  verticalAlign="middle">
                   <Header style={{fontFamily: 'Paprika', color:'black'}} as='h3' inverted>Interested in working on a project together?</Header>
               </Grid.Column>
               <Grid.Column width={5}>
                 <Link to='./contact'>
                   <Header inverted as='h3' style={{fontFamily: 'Paprika', color: 'black'}} content='Contact Me' />
                 </Link>
                 <div>
                   <div  relaxed="true" columns={3}>
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
                   </div>
                 </div>
               </Grid.Column>

             </Grid.Row>
           </Grid>
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
    fontFamily: 'Paprika',
    fontSize: '20px',
    backgroundColor: 'rgb(246, 245, 245)'
  }
}

export default Footer;
