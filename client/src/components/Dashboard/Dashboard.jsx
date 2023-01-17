import React, {useEffect, useState} from "react";
import {Row, Col} from 'antd';
import axios from 'axios';

function Dashboard() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/product/find').then((res) => {
            console.log(res.data);
            setItems(res.data);
        });
    }, []);
    


    return(
        <div>

            <div>   
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                    <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link" href="#">Features</a>
                    <a class="nav-item nav-link" href="#">Pricing</a>
                    <a class="nav-item nav-link disabled" href="#">Disabled</a>
                    </div>
                </div>
            </nav>         
            </div> 
            

            <div>
            <h2>Items</h2>
                <Row gutter={[24,24]}>
                {
                    items.map((items) => {
                        return (

                            <Col lg={4} key={items.id}>
                            <div>
                                <div>
                                    <img src={items.Images} width='100px' height='100px'/>
                                </div>
                                <h3>{items.Name}</h3>
                                <h6>{items['Regular price']}</h6>
                            </div>
                            </Col>

                        )
                    })
                }
                </Row>
            </div>

        </div>
    )
}

export default Dashboard;

                                {/* <tr key={items.id}>
                                <td> {items.Images}  {items.Name} {items['Regular price']}</td>
                                </tr>  */}