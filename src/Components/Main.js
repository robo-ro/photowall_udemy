import React, {Component} from 'react'
import Title from './Title'
import Photowall from './Photowall'
import AddPhoto from './AddPhoto'
import {Route} from 'react-router-dom'   



class Main extends Component {
    constructor(){
        super()
        this.state ={

            posts:  [{
                id: 0,
                description: "beautiful landscape",
                imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
                "3919321_1443393332_n.jpg"
                }, {
                id: 1,
                description: "Aliens???",
                imageLink: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/12/09/942199-aliens.jpg"
                }, {
                id: 2,
                description: "On a vacation!",
                imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
                }],

        }

        this.removePhoto = this.removePhoto.bind(this)
        console.log('constructor')
    }


    removePhoto(postRemoved){

        console.log(postRemoved.description)
        this.setState((state) =>( {

            posts: state.posts.filter(post => post !== postRemoved) 

        }))

    }

    addPhoto(postSubmitted){

        this.setState((state) =>({

            posts : this.state.posts.concat([postSubmitted])
        }))
    }
   



    


    componentDidMount(){
    

        console.log('componentDidMount')
    }

    componentDidUpdate(prevProps,prevState){
       
        console.log(this.state)
        console.log(prevState.post)
    }


    render() {

        console.log(this.state.posts)

        return ( 
        
        <div>
           <Route exact path ="/" render={() => (
                <div>
                    <Title title={'Photowall'}/>
                    <Photowall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate ={this.navigate} />

                </div>
           )
        }/>
               
            <Route path="/AddPhoto" render = {({history} ) => (
                <AddPhoto onAddPhoto = {(addedPost) =>{



                    this.addPhoto(addedPost)
                    history.push('/')

                               
                }
                    
                }/>
                )
            }/>
             
        </div>
       

          
        )
    }
}





export default Main