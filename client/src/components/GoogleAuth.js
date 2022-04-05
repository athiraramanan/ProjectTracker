import React from 'react';
import {connect} from 'react-redux';
import {signIn, signOut} from '../actions';
class GoogleAuth extends React.Component{
	
	componentDidMount(){
		window.gapi.load('client:auth2', () => {
			window.gapi.client.init({
				clientId: '470761237205-imba60sqkr2vgsucig7mgndhkt7ln4d1.apps.googleusercontent.com',
				scope: 'email'
			}).then(()=>{
				this.auth = window.gapi.auth2.getAuthInstance();
				this.onAuthChange(this.auth.isSignedIn.get())
				this.auth.isSignedIn.listen(this.onAuthChange)
			})
		});
	}

	onSignedIn = () =>{
		this.auth.signIn();
	}

	onSignedOut = () => {
		this.auth.signOut();
	}

	onAuthChange = (isSignedIn)=> {
		if (isSignedIn){
			this.props.signIn(this.auth.currentUser.get().getId());
		}
		else{
			this.props.signOut();
		}
	}

	renderAuthButton(){
		if (this.props.isSignedIn=== null ){
			return null
		}
		else if(this.props.isSignedIn===true){
			return (
				<button onClick={this.onSignedOut} className='ui red google button'>
					<i  className='google icon'/>
					Signed Out
				</button>
			)
		}
		else{
			return(
				<button onClick={this.onSignedIn} className='ui red google button'>
					<i  className='google icon'/>
					Signed In
				</button>
			)
		}
	}
	render(){
		return(
			<div>{this.renderAuthButton()}</div>
		)
	}
} 

const mapStateToProps = (state) =>{
	return {isSignedIn: state.auth.isSignedIn};
}
export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);