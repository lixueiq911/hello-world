'use strict';

import 'semantic-ui/semantic.min.css!';
import React from 'react';
import ReactDOM from 'react-dom';
//import CommentBox from './comment/CommentBox';
class CommentBox extends React.Component{

	render(){
		return(
			<div className='ui comments'>
				<h1>评论</h1>
				<div className='ui divider'>
		
				</div>
		
			</div>	
		
		
		)	
	
	}
}
ReactDOM.render(
	<CommentBox>,document.getElementById('app')

);
