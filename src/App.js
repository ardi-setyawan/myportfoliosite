import React, { Component } from 'react';
import './App.css';
import { Layout , Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/Main'
import { Link } from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <div className="demo-big-content">
        <Layout>
            <Header className="header-color" title={<Link style={{textDecoration :'none', color :'white'}} to="/"> My portfolio </Link>} scroll>
                <Navigation>
                    <Link to="/Resume">Resume</Link>
                    <Link to="/Aboutme">About me</Link>
                    <Link to="/Contact">Contact</Link>
                    <Link to="/Project">Project</Link>
                </Navigation>
            </Header>
            <Drawer title="Title">
                <Navigation>
                <Link to="/Resume">Resume</Link>
                <Link to="/Aboutme">About me</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/Project">Project</Link>
                </Navigation>
            </Drawer>
            <Content>

            <div className="page-content" />
            <Main/>
            </Content>
        </Layout>
      </div>
    );
   } 
}

export default App;
