import React from 'react';
import Header from '../components/header';
import Nav from '../components/nav';
import TemTable from '../components/template-table';
import '../styles/templates.scss'

export default class Templates extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div className="templates-wrapper">
                <div className="templates">
                    <Header/>
                    <div className="main-content">
                        <Nav />
                        <div className="content" role="contentInfo">
                            <h1 className="title" role="title">Templates</h1>
                            <p className="intro" role="template-introduction">
                                Templates exist to document the layout and structure of a section 
                                and work as examples on how to combine the various parts of the 
                                Manager Onboarding design system together in order to build 
                                complete views.
                            </p>
                            <TemTable />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}