import React, { Component } from 'react';
import {Grid , Cell, List, ListItem,ListItemContent} from 'react-mdl';


class Contact extends Component{
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Ardi Setyawan</h2>
                        <img
                            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                            alt="avatar"
                            style={{height : '250px'}}
                        />
                        <p style={{width : '75%', margin : 'auto', paddingTop : '1em'}}>
                        now I am
employee class students at STMIK AKAKOM Yogyakarta.
 I majored in Informatics Engineering.
And I took the Night class
I work because my daily needs include paying tuition fees.
                        </p>                        
                    </Cell>
                    <Cell col ={6}>
                        <h2>Contact me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize : '25px', fontFamily : 'Anton'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>
                                    (+6285) 70176-9488
                                </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize : '25px', fontFamily : 'Anton'}}>
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                    ardisetyawan1621@gmail.com
                                </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize : '25px', fontFamily : 'Anton'}}>
                                    <i className="fa fa-github" aria-hidden="true"/>
                                    https://github.com/ardi-setyawan
                                </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>

            </div>
        );
    }

}

export default Contact;