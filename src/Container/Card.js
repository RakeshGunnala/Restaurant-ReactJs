import React from 'react';
import { connect } from 'react-redux';
import { addorder, resetfilter, resettablenumber } from '../Action';

const Card = ({ filter_name,addorder,table_number}) => {
    const [data, setData] = React.useState([]);
    const [cloneData, setCloneData] = React.useState([]);

    React.useEffect(() => {
        fetch('https://food-itema-default-rtdb.firebaseio.com/telugu-skillhub-api/-MsE8GfWtRjc8x_t8pCC.json')
            .then(response => response.json())
            .then(json => {
                setData(json.items);
                setCloneData(json.items);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    React.useEffect(() => {
        if (filter_name !== "All Items") {
            let specific = cloneData.filter(item => item.category === filter_name);
            setData(specific);
        } else {
            setData(cloneData);
        }
    }, [filter_name, cloneData]);

    const Handler = (id, name, prize, url) => {
        if (table_number != null) {
            addorder(id, name, prize, table_number, url)
                .then(() => {
                    resettablenumber();
                    resetfilter();
                    alert('Order Placed Successfully');
                })
                .catch((error) => {
                    console.error('Error placing order:', error);
                });
        } else {
            alert('Please Select the table number');
        }
    };
    
    


return (
        <div>
            <center>
                {data.length > 0 ? (
                    <div className='container'>
                        <div className='row'>
                            {data.map((item) => (
                                <div className='col-md-4' style={{ padding: '5px' }} key={item.id}>
                                    <div className='card' style={{ width: '18rem', padding: '3px' }}>
                                        <img src={item.url} className='card-img-top' alt={item.name} />
                                        <div className='card-body'>
                                            <h5 className='card-title'>{item.name}</h5>
                                            <div className='card-text'>Rs.{item.prize}</div>
                                            <button className='btn btn-primary' onClick={() => Handler(item.id,item.name,item.prize,item.url)}>Order</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className='spinner-border text-primary' role='status'>
                        <span className='visually-hidden'>Loading...</span>
                    </div>
                )}
            </center>
        </div>
    );
};


const mapStateToProps = state => ({
    filter_name : state.filterreducer.filter_name,
    table_number : state.tablereducer.table_number
});

export default connect(mapStateToProps,{addorder})(Card);