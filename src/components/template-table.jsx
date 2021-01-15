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
                   <th>Template</th>
                   <th>Format</th>
                   <th>Location</th>
                   <th>Status</th>
                </tr> 
                {templates.map(tem => 
                    <tr>
                        <td>{tem.template}</td>
                        <td>{tem.format}</td>
                        <td>{tem.location}</td>
                        <td>
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