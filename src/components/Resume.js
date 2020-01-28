import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skils from './Skils';


class Resume extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col ={4}>
                        <div style={{textAlign : 'center'}}>
                        <img 
                            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                            alt="avatar"
                            style={{height : '200px'}}
                        />
                        </div>
                        <h2 style={{paddingTop :'2em'}}>Ardi Setyawan</h2>
                        <h4 style={{color:'grey'}}>Web Developer</h4>
                        <hr style ={{borderTop : '3px solid #833fb2' , width : '50%'}}/>
                        <p>
                           fkjhaslkdfjhalkjdhalksjghlasdkjhlakjhlakjhdglajhldjghlafkjh
                           lajfdladflakdgaljgajkgalkjgdsal
                           aksjglaskjdgakjgdsajkglakjsdglakjghkasjgdskjag
                           fkasgfdlsha 
                        </p>
                        <hr style ={{borderTop : '3px solid #833fb2' , width : '50%'}}/>
                        <h5>address</h5>
                        <p>jl affandi 17 sleman yogyakarta</p>
                        <h5>Email</h5>
                        <p>ardisetyawan1621@gmail.com</p>
                        <hr style ={{borderTop : '3px solid #833fb2' , width : '50%'}}/>
                    </Cell>

                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear={2013}
                            endYear={2016}
                            schoolName="SMK N 2 Temanggug"
                            schoolDescription="fkjhaslkdfjhalkjdhalksjghlasdkjhlakjhlakjhdglajhldjghlafkjh
                            lajfdladflakdgaljgajkgalkjgdsal
                            aksjglaskjdgakjgdsajkglakjsdglakjghkasjgdskjag
                            fkasgfdlsha "
                        />

                        <Education
                            startYear={2018}
                            endYear={2022}
                            schoolName="STMIK AKAKOM YOGYAKARTA"
                            schoolDescription="fkjhaslkdfjhalkjdhalksjghlasdkjhlakjhlakjhdglajhldjghlafkjh
                            lajfdladflakdgaljgajkgalkjgdsal
                            aksjglaskjdgakjgdsajkglakjsdglakjghkasjgdskjag
                            fkasgfdlsha "
                        />

                        <hr style={{borderTop: '3px solid #e22947'}} />
                        <h2>Experience</h2>
                        <Experience 
                            startYear={2016}
                            endYear={2020}
                            jobName="CV ANNISA COMPUTER"
                            jobDescription="fkjhaslkdfjhalkjdhalksjghlasdkjhlakjhlakjhdglajhldjghlafkjh
                            lajfdladflakdgaljgajkgalkjgdsal
                            aksjglaskjdgakjgdsajkglakjsdglakjghkasjgdskjag
                            fkasgfdlsha "

                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />
                        <h2>Skills</h2>
                        <Skils 
                            skil="javascript"
                            progress={80}
                        />
                        
                        <Skils 
                            skil="PHP"
                            progress={70}
                        />
                        
                        <Skils 
                            skil="React"
                            progress={60}
                        />
                        



                    </Cell>
                </Grid>

            </div>

        );
    }

}

export default Resume;