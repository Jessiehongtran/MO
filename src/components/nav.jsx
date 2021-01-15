import React from 'react';
import '../styles/nav.scss';

export default class Nav extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div className="nav" role="navigation">
                <li>
                    <ul>
                        <a>Welcome</a>
                    </ul>
                    <ul>
                        <a>Guidelines</a>
                    </ul>
                    <ul>
                        <a>Copywriting</a>
                    </ul>
                    <ul>
                        <a>Resources</a>
                    </ul>
                    <ul>
                            <li className="subnav">
                                <ul>
                                    <a>Accessibility</a>
                                </ul>
                                <ul>
                                    <a>Glossary</a>
                                </ul>
                                <ul>
                                    <a>Templates</a>
                                </ul>
                            </li>
                    </ul>
                    <ul>
                        <a>What's new</a>
                    </ul>
                </li>
            </div>
        )
    }
}