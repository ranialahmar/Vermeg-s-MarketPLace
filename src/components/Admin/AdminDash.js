import React, { Component } from 'react';
import axios from 'axios';
import AdminTablesItems from "./AdminTablesItems"
import AdminFormAddItem from './AdminFormAddItem'
/*import AdminHistoryLog from './Admin-history-log'
import AdminTableOrders from './Admin-table-orders'*/
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import {green} from "@material-ui/core/colors";
import Categories from "./Categories";
import UsersList from "./UsersList";
import Historylog from '/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/components/Admin/Histoylog';

export default class AdminDash extends Component {
    constructor(props){
        super(props);
        this.state={
            apiList: [],
            activeTab: '2'
        }
    }

    componentDidMount = async () => {
        try {
            const response = await axios.get('/api/productsdata')
            const apiList = await response.data;
            this.setState({ apiList })
        } catch (error) {
            console.log(error);
        }
    }

    toggle = tab => this.state.activeTab !== tab && this.setState({ activeTab: tab });

    render() {

        const styles = {
            tab1: {
                cursor: 'pointer',
                backgroundColor: 'green',
                color:'white',
                height:'100%'
            },
            tab2: {
                cursor: 'pointer',
                backgroundColor: 'pink',
                color:'white',
                height:'100%'
            },
            tab3: {
                cursor: 'pointer',
                backgroundColor: '#66bceb',
                color:'white',
                height:'100%'
            },
            tab4: {
                cursor: 'pointer',
                backgroundColor: '#ffce56',
                color:'white',
                height:'100%'
            },
            tab5: {
                cursor: 'pointer',
                backgroundColor: 'blue',
                color:'white',
                height:'100%'
            },

        }

        return (
            <div>
                <Nav  tabs className={"navAd"}>
                    <NavItem>
                        <NavLink style={styles.tab1} onClick={() => { this.toggle('1'); }}>
                            <b>Product Categories </b>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={styles.tab2} onClick={() => { this.toggle('2'); }}>
                            <b>Update/delete Producrs</b>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={styles.tab3} onClick={() => { this.toggle('3'); }}>
                            <b>Add new Product</b>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={styles.tab4} onClick={() => { this.toggle('4'); }}>
                            <b>Check Users </b>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={styles.tab5} onClick={() => { this.toggle('5'); }}>
                            <b>History log</b>
                        </NavLink>
                    </NavItem>
                </Nav>
                <div className="tableCh">
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                     <Categories stylesTab1={styles.tab1}/>
                    </TabPane>
                    <TabPane tabId="2">
                        <AdminTablesItems stylesTab2={styles.tab2}/>
                    </TabPane>
                    <TabPane tabId="3" style={styles.tab3}>
                        <AdminFormAddItem />
                    </TabPane>
                    <TabPane tabId="4">
<UsersList stylesTab4={styles.tab4}/>
                    </TabPane>
                    <TabPane tabId="5">
                        <Historylog stylesTab5={styles.tab5} />
                    </TabPane>

                </TabContent>
                </div>
            </div>
        )
    }
};