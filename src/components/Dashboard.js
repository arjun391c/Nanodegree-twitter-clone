import React, { Component } from 'react'
import Tweet from './Tweet'
import { connect } from 'react-redux'

export class Dashboard extends Component {
    render() {
        return (
            <div>
                <h3 className='center'>Your Timeline</h3>
                <ul className='dashboard-list'>
                    {this.props.tweerIds.map((id)=>(
                        <li key={id}>
                            <Tweet id={id} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({tweets}){
    return{
        tweerIds: Object.keys(tweets)
           .sort((a,b) => tweets[b].timestamp - tweets[a].timestamp) 
    }
}


export default connect(mapStateToProps)(Dashboard)
