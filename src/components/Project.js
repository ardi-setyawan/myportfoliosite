import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';
import {Card, CardActions, CardTitle, CardText, Button} from 'react-mdl';

class Project extends Component{
    constructor(props){
        super(props);
        this.state = {setTab : 1 };
    }

    toogleCategories(){
        // Html Css
        if(this.state.activeTab === 0 ){
            return(
                <div className="project-grid">
                    <Card shadow={5} style={{minWidth: '450',  margin: 'auto'}}>
                        <CardTitle expand style={{color: '#fff',height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI1JZ9rwYXs_NrbXbQU9LTUJIm71oTf_PsDkVmmVzoX9FfSuPR&s) center / cover'}}>Part 1</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aenan convallis.
                        </CardText>
                        <CardActions border>
                            <Button colored>View Updates</Button>
                        </CardActions>
                    </Card>
                    <Card shadow={5} style={{minWidth: '450',  margin: 'auto'}}>
                        <CardTitle expand style={{color: '#fff',height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI1JZ9rwYXs_NrbXbQU9LTUJIm71oTf_PsDkVmmVzoX9FfSuPR&s) center / cover'}}>Part 2</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aenan convallis.
                        </CardText>
                        <CardActions border>
                            <Button colored>View Updates</Button>
                        </CardActions>
                    </Card>
                    <Card shadow={5} style={{minWidth: '450',  margin: 'auto'}}>
                        <CardTitle expand style={{color: '#fff',height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI1JZ9rwYXs_NrbXbQU9LTUJIm71oTf_PsDkVmmVzoX9FfSuPR&s) center / cover'}}>Part 3</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aenan convallis.
                        </CardText>
                        <CardActions border>
                            <Button colored>View Updates</Button>
                        </CardActions>
                    </Card>
                </div>
            )
        }
        //Javascript
        else if(this.state.activeTab === 1){
            return(
                <div className="project-grid">
                     <Card shadow={0} style={{minWidth: '450', height: '400px', margin: 'auto'}}>
                        <CardTitle expand style={{color: '#fff', background: 'url(https://i0.wp.com/www.murdockcruz.com/wp-content/uploads/2017/02/javascript-logo-e1487161175831.jpg?fit=600%2C338&ssl=1) center / cover'}}>Part 1</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aenan convallis.
                        </CardText>
                        <CardActions border>
                            <Button colored>View Updates</Button>
                        </CardActions>
                    </Card>
                    <Card shadow={0} style={{minWidth: '450', height: '400px', margin: 'auto'}}>
                        <CardTitle expand style={{color: '#fff', background: 'url(https://i0.wp.com/www.murdockcruz.com/wp-content/uploads/2017/02/javascript-logo-e1487161175831.jpg?fit=600%2C338&ssl=1) center / cover'}}>Part 2</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aenan convallis.
                        </CardText>
                        <CardActions border>
                            <Button colored>View Updates</Button>
                        </CardActions>
                    </Card>
                </div>
            )
        }
        //bootstrap
        else if(this.state.activeTab === 2){
            return(
                <div className="project-grid">
                     <Card shadow={0} style={{minWidth: '450', height: '400px', margin: 'auto'}}>
                        <CardTitle expand style={{color: '#fff', background: 'url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEA8QEA8QEA8PDQ0PDw8PDw8ODw8PFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGislIB8tLSstLS01LS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLSstKy0tLSstLS0tLS0tLf/AABEIAJ8BPgMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAwQFAgEGB//EADoQAAIBAgQEAwcDAgUFAQAAAAABAgMEERIhMUFRYXEFgZEGMkJSobHREyLBgvAHI2Jy4TRDY6LxFP/EABoBAAMBAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAoEQEBAAIBBAIBAwUBAAAAAAAAAQIRAxIhMUEEURNhcZEiMsHR8BT/2gAMAwEAAhEDEQA/APi6dlJrFtLHzZIvD+cvoXISxSfNJnp9BeTJ27qorCPOX0O1ZQ6+py76PKXojl36+V+pX9Z90ytIfL9WdK3h8q9Co79/KvU5d9PlFeTDozGqvqnFfCvRHSRmO8nzw8kcO4n8z+wfio6WsDHdWXzS9WXrGtisr3W3VCy47JsrEF9QyvMtnv0ZVNmpBSTT2ZkVIOLae6Zpx5bmlSuQAaGAAAA9PAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQ8PqYpx5arsWzIoVMsk/Xsa6Zz8k1UVl3lLLLpLVfyQGrd0s0XzWq/BlGuGW4qUABZgAAB3Sm4tNcH/aOAAbUJJpNbMq39HFZlut+xx4fW+F8dV35F45rvDJHisQE1zSySw4PVdiE6JdrAAMABfsfDJVMHL9kOfxS7L+Qk2FOnTlJ4RTk+SWJdh4PWfwxXeS/g3rejCmssFguPN9W+JLmNJh9np8zV8KrR1yYr/S1L6blNr/AJPssxTvrGFXV6T4TW/nzC4fQ0+YBYu7SdJ4SWnCS91lczIAAAAAAAAAAAAAAAAAAAAAAAANKwqYxw4x08uBmk1rVyyT4PR9iM8dwq1TLu6WWT5PVfg1CC9pZo9Y6r+THDLVTGWADpWAAAAAA9Tw1XA1qFXNFP16MyCxZVsssHtLTs+DM+THcKxduqOePVar8GUbZn39HB5ls9+5HHl6KVUO6VOUnlim3yRYtLGU9X+2PPi+yNmhSjBYRWHPm+7OnHHa9ILHwyMMJTwlLl8K/Jo5iHMMxrJo02YZjR8K9m7y6SlSoSyPapNqnB9U5b+WJqVfYC/isVGjN/LGr+7/ANkl9TLL5HFjdXKJueM9vmswzHV7a1aM3TrU5U5r4ZrB4c1zXVFfMayyzcUlmlJNNJp7p6oxr3wpr91PVfI9125mpmGYLJQ+XYN+7s41NdpfMv55mNcW8qbwkuzWzMbjYWkIAEQAAAAAAAAAAAAAAAAAAAADUs6uaK5rRk5mWVTLLpLR/wAGmc2eOqisq6pZZNcHqiE076lmjjxjr5cTMNsMtxUoACzAAAAAAallVzRw+JaP8lpU1xwfR7EFnTUYrm0m2T5isOGS7pzGJcwzEWYZjZS5ZWtWvONOjCVSpLaMVi+75Lq9D9F8G9jrayp//p8RqU5OODySf+TTfBNf9yXTbo9zB9hPa+jZ40a1GKhOWLuKcf8ANXSot5RXTbkz632s9mo+J04XFvc4yUP8tObnbVF0w9yXVea5eX8rmz/JMMv6cb7+/wDTn5MrvV7R894//iNVm3CzSo01oqs4xlUl1UXpFd032Mmw9ur+lNSlW/Wjj+6nVjDCS7pJr+9GfP8AiVlVtqkqVenKnOO6lxXzJ7NdUfVeynsJWuctW5UqNvo8r0rVVyS+CL5vXlzNsuP4vFx7smv5tXcePHHu+r9snRu/ClduOVqnSrUXLDNBycU4Y8cccPRn5fTsa8lmjQrSj80aNSUfVI/S/aH22srVRoUaUbmVHBRjFpUKTisEs2D1S5J90YNL/FG5UsZ29CUMfdi6kJ4f7m2voYfEvPhx6xw7b3N3SOPrk7R8VJtNp6Nbp6NeR5mP2OFOx8atv1Mn7ljBywUa9Cpgnhjx3T4pn5H4xYTta9W3m05Up5W1opLBOMlyxTT8zr+P8qctuNmsp5jTDk6u3tBmPJ4NYNJp8GR5hmOpahdeHtaw1Xy8V25lA3sxQ8SprSa3xwfXqZZY+4VigD1IsRspvku7M7ZPJKwLsbDnL0RLGxh1fn+CLyYluM09SNWNvBfCvPUlSw2JvL+hdTIjQm9ov0w+5IrKfJeppnDrR2zLHuhfkyvgbZM4OLwawZya1xRU1hxWz5GVKLTae6NMM+o5dvAAWYAAAa1tVzRT47PuZJasKuEsOEvuZ8k3CrRMm5pZZNcN12NYrX1LGOPGOvlxMuPLVTKzQAdKwAAAMAA0LO5TSi/eSw7rmizmMfKT0rprSWq+bj5m03J3U0cwzEKnjqnihmKNNmNb2e9pLixnmoz/AGN4zozxdKfdcH1Wph5hmJyxmU1lNwrJe1fuXgHtHY+J/p5oQVzSf6kaNaMZThJLWdNv3l1Wu2KRj/4ny8SUX+n/ANBlX6joY/q9f1eKh205n5PCq4tSi3GUWnGUW1KLWzTWzP0X2T/xKlHLRv8AGcdFG5jHGUV/5Ir3l/qWvNPc8vP4eXDnOTjnVJ6v+P8Av5c947jd49/0fnqkWLG0q16kaVGnKpUltCCxfd8l1eh+qeMewFneuFxaVY0Y1GpTdFRqUasW9ZQSeEZdtOhxfeNeHeCU3QtoKrdYfuipJzcvmrVOH+1eSSNv/fM5rjxty+vr91/m3/bO7Q9m/D6fg1jOd1VipSl+pWa1SllSjShxk9PNtn5L474o7q5rXDWX9WeKjvlikoxj3ypHPjnj1xe1P1LipmwxyQX7adNcox4d9+pm5jX43x7hbyZ3eWR4Yau75qbMMxDmOalZRWLflxZ1tVjMZ97cKWEY6pPFvm+RHVrSn0jy59yOSIz3YVe055WnyeJrwmpJNbMxi1ZV8rwfuv6M5uTHc2ixfq1FFYvb1K0r9cIt98EWpRTTT2ZlXFJweHDg+aM+OS+UzSaV/LgkvVkUrqb+J+WCIQbTGT0rT2Um9233eJ4AUbRsrjFZXutuqPby3zLFe8vquRnJ4ardGrbVs66rdGOc6b1RN7d2SC7fW/xr+pfyUjTHLc2qAAKAepngANijUzRT579zsoeH1MG489V3/v7F85cpqorIuKeWTXDddiM0b+ljHNxj9jON8MtxUoACzAAAeRlwe/3OitN4nsarW+q58S8c9dqqVYhJx1j5rgyzSuFLo+TKaliGi/2NoZhmKULhrSWq5/knUxy7CbMMxFmGYYa3hvj11bQqQoXFSlCqsJxi9P8AdH5ZdVgzOzfVtvq3uyLMMwpjJdyeRpLmGYgnVS3K86rl0XLn3C0LFW64R1fPgvyQccW8XzOUeTqJbi37oSYnObHbYrym5dFyJKT4GeWe+ybUoAJJo2VfMsr3X1RNcUVNYceD6mVCTTTW6NajVUkmvNcmYZ49N3E2aZElg2nujw0L6hisy3W/VGea45bhygAKMO6NRxaa8+q5HAEGzTmpLFbP+8DOu7fK8V7r26dDy0r5Hr7r36dTU3Me+FT4YgAN1AAAPYywaa3TxNinNSSa4oxi94dV3j5r+TLkm5squtGRXp5ZNenY1yr4hSxWZbx37EceWqmVnAA6FgAAK044HJaccSCpS5E3sSNNrb/glhVT6PkQtnjFMrPA2tHibW3pwIIVcN9VzJlI0mUqt7Twqp9HyOsxVaxPNeb9S+untbzEc63BavnwIMObbOkHVaNver1Z7icSmluQSm30XIi5yFvSadbl68CNddzlHUViZ3LflO3pLRjxPadLmS4DmwAAownta2R9Hv8AkgArN9g2zNvKGV4r3X9HyJbCv8D/AKfwW6kFJNPZmEtwyR4YwO6tNxeV+XVHULeb2i/PT7m+4tEC5CwfFpdtSaFlBb4vu/wTeTGFuM00LCUsMGngtm9PIswpxWyS7I6MsuTc1orWIADoUAAAHdOeVprgzgAG1F4pNbNYnrWOnBlTw+pinHlquxbOTKaukVj1qeWTXL7cDg0PEKWKUuWj7GedOOW4qAAKMAABHUpJlacGi6eOOJFxLShieKTW3pwJ6tvyK7MruJTwqp9HyO8Sowseb9Spy32fUt4kU63LXrwIH1ePc9C8lo6nXfU9xPIxb2LVKhhuLHdKI6dJsswgkdJA1mOlaAexi3sm+2pNC0m+GHfQdshoAXoWHOXov5JoWkFwx7vEi8mJbjMSJYW038LXfQ1IxS2SXZYHpF5foupRp2L3csO2peBFO5gt5Ly1ItuReUuAOac1JYrVHFzOSjjHDTfHlzFrvokpxOrGO8kvPUy515PeT8tCM1nF9q6WjO+itk39EQTvpcEl9SqC5x4w9QABZgAAAAAJKFTLJP17GujENKwqYxw4x08uBly4+05RYksU09msDIqwytp8GbBT8RpbS5aPtwI48tXQlUAAdCgAAAAAAiq0UyUCslClVtZJYpYx5rh3K+Jv2LeOGDcXxw0TLUrSD3in3SOXKWXTOx8sT0qDe+iN+Xh9NtPDDosFiSwtoLaK89fuE17DIpUPlTfZFmFnN8Eu7/Bpgv8AJfStqcLBcZeiwJoWsF8OPfUmOJ1YreSX3J6sqW67Sw2BVnfRWyb+iIJ30nskvqxzjyo1WiRzrxW8l92Zc6snvJv7HBc4vs+loTv48E330IJ3s3tguyx+5WBcwxh6dTm3u2+7OQCzWLSvlevuvfp1NMxC/Y1/gf8AT25GPJj7ibEF5QyvFe69uj5Fc2akFJNPZmTWpuLaf/1cyuPLfY5XAANDAAAAAAAAACa1q5ZJ8Ho+xCBWbDbPJxTTT2awIbOpmiua0ZOctmqzY1SDi2nweByaF5buTTitdnw8yKFhLi0u2p0TOa7r2qA0oWMFvi/PD7E0KUVtFLy1JvLC6mXCjJ7RfpgiaFjJ7tL6s0QReWjqVYWMeLb+iJoUILaK+7JATcrS2AgqXcFxbfJIjhfYySy4JvDHHUOijS2czmlu0u7OiC8pZo48Y6rtxQpN3uTmd7BbYvsvyQTv5cEl31KgOiceMXqJJ15PeT7bIjAK0YABgAAAAAAAAAPU8O6PAAa1tWzrqt0eXVDOuq2/BnUKri015rmjWjLFJrZrE58sem7iL2YzR4Xr+h8a/q/JRNsctza4/9k=) center / cover'}}>Part 1</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aenan convallis.
                        </CardText>
                        <CardActions border>
                            <Button colored>View Updates</Button>
                        </CardActions>
                    </Card>
                    <Card shadow={0} style={{minWidth: '450', height: '400px', margin: 'auto'}}>
                        <CardTitle expand style={{color: '#fff', background: 'url(data:image/jpeg;base64,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) center / cover'}}>part 2</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aenan convallis.
                        </CardText>
                        <CardActions border>
                            <Button colored>View Updates</Button>
                        </CardActions>
                    </Card>
                </div>
            )
        }
        //PHP
        else if (this.state.activeTab === 3){
            return(
                <div className="project-grid">
                     <Card shadow={0} style={{minWidth: '450', height: '400px', margin: 'auto'}}>
                        <CardTitle expand style={{color: '#fff', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_IjepgdkP5tHWxQn0Ew2Yrh-BnFJNTISvjGm6Xyj4hO6hdSVM7g&s) center /cover'}}>Part 1</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aenan convallis.
                        </CardText>
                        <CardActions border>
                            <Button colored>View Updates</Button>
                        </CardActions>
                    </Card>
                    <Card shadow={0} style={{minWidth: '450', height: '400px', margin: 'auto'}}>
                        <CardTitle expand style={{color: '#fff', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_IjepgdkP5tHWxQn0Ew2Yrh-BnFJNTISvjGm6Xyj4hO6hdSVM7g&s) center /cover'}}>Part 2</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aenan convallis.
                        </CardText>
                        <CardActions border>
                            <Button colored>View Updates</Button>
                        </CardActions>
                    </Card>
                    <Card shadow={0} style={{minWidth: '450', height: '400px', margin: 'auto'}}>
                        <CardTitle expand style={{color: '#fff', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_IjepgdkP5tHWxQn0Ew2Yrh-BnFJNTISvjGm6Xyj4hO6hdSVM7g&s) center /cover'}}>Part 3</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aenan convallis.
                        </CardText>
                        <CardActions border>
                            <Button colored>View Updates</Button>
                        </CardActions>
                    </Card>
                    <Card shadow={0} style={{minWidth: '450', height: '400px', margin: 'auto'}}>
                        <CardTitle expand style={{color: '#fff', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_IjepgdkP5tHWxQn0Ew2Yrh-BnFJNTISvjGm6Xyj4hO6hdSVM7g&s) center /cover'}}>Part 4</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aenan convallis.
                        </CardText>
                        <CardActions border>
                            <Button colored>View Updates</Button>
                        </CardActions>
                    </Card>
                </div>
            )
        }
        //React
        else if(this.state.activeTab === 4) {
            return(
                <div className="project-grid">
                     <Card shadow={0} style={{minWidth: '450', height: '400px', margin: 'auto'}}>
                        <CardTitle expand style={{color: '#fff', background: 'url(https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>Part 1</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aenan convallis.
                        </CardText>
                        <CardActions border>
                            <Button colored>View Updates</Button>
                        </CardActions>
                    </Card>
                    <Card shadow={0} style={{minWidth: '450', height: '400px', margin: 'auto'}}>
                        <CardTitle expand style={{color: '#fff', background: 'url(https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>Part 2</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aenan convallis.
                        </CardText>
                        <CardActions border>
                            <Button colored>View Updates</Button>
                        </CardActions>
                    </Card>
                </div>
            )
        }
        
    }

    
    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} 
                    onChange={
                        (tabId)=> this.setState({activeTab :tabId})}ripple>
                            <Tab>HTML/CSS</Tab>
                            <Tab>Javascript</Tab>
                            <Tab>Bootsrap</Tab>
                            <Tab>PHP</Tab>
                            <Tab>React</Tab>
                </Tabs>
                <Grid>
                        <Cell col={12}>
                            <div className="centent">{this.toogleCategories()}</div>
                        </Cell>
                </Grid>
               
            </div>
        );
    }

}

export default Project;