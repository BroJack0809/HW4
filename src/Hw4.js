import React from 'react';
import $ from 'jquery';

class UserGithub extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            githubUrl:'',
            avataUrl:'',
            username:'',
            bio:'',
            login:'',
            followers:'',
            following:'',
            created_at:'',
            updated_at:'',
            location:'',
        }
    }
    componentDidMount(){
        $.get(this.props.source,(result)=>{
            console.log(result);
            const data=result;
            if(data){
                this.setState({
                    username:data.name,
                    githubUrl:data.html_url,
                    avataUrl:data.avatar_url,
                    bio:data.bio,
                    login:data.login,
                    followers:data.followers,
                    following:data.following,
                    created_at:data.created_at,
                    updated_at:data.updated_at,
                    location:data.location,
                });
            }
        });
    }
    render(){
        return(
            <div>
                <img src={this.state.avataUrl}/>
                <h2>{this.state.login}</h2>
                <a href={this.state.githubUrl}>Github Link</a>
                <h3>名字: {this.state.username}</h3>
                <h4>{this.state.bio}</h4>
                <h5>{this.state.followers} followers {this.state.following} following</h5>
                <h4>地址: {this.state.location}</h4>
                <h4>Create: {this.state.created_at}</h4>
                <h4>Update: {this.state.updated_at}</h4>
            </div>
        )
    }
}
export default UserGithub;
// ReactDOM.render(
//     <UserGithub source="https://api.github.com/users/BroJack0809"/>,
//     document.getElementById('root')
// );