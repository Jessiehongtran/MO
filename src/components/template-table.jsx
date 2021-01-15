import React from 'react';
import { templates } from '../data/templateData';
import '../styles/template-table.scss'

export default class TemTable extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    getColors(status){
        if (status === "Ready"){
            return {
                color: "#00875A",
                bgColor: "#E8FAF6"
            }
        } else if (status === "Building"){
            return {
                color: "#F7B227",
                bgColor: "#FDEDCF"
            }
        } else if (status === "In Review"){
            return {
                color: "#DF3B13",
                bgColor: "#FFECE8"
            }
        } else {
            return {
                color: "#FFFFFF",
                bgColor:"#FFFFFF"
            }
        }
    }

    render(){
        return (
            <table>
               <tr>
                   <th role="template">Template</th>
                   <th role="format">Format</th>
                   <th role="location">Location</th>
                   <th role="status">Status</th>
                </tr> 
                {templates.map(tem => 
                    <tr>
                        <td role="template">{tem.template}</td>
                        <td role="format">{tem.format}</td>
                        <td role="location">{tem.location}</td>
                        <td role="status">
                            <p 
                                style={{ 
                                    color: this.getColors(tem.status).color, 
                                    backgroundColor: this.getColors(tem.status).bgColor,
                                    paddingRight: '12px',
                                    paddingLeft: '12px',
                                    paddingTop: '6px',
                                    paddingBottom: '6px',
                                    textAlign: 'center',
                                    borderRadius: '20px'
                                }}>
                                {tem.status}
                            </p>
                        </td>
                    </tr>
                )}
            </table>
        )
    }
}