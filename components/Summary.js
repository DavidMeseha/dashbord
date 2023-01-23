import { useState } from 'react';
import CountUp from 'react-countup';

const ViewMore = ({ link }) => {
    const viewMoreStyle = { padding: '5px 0', background: '#ef9700', fontSize: 10 }

    return (
        <div style={viewMoreStyle}>
            <div style={{ textAlign: 'center' }}>View More</div>
        </div>
    )
}

const Summary = () => {
    const sectionTitleStyle = { width: 'max-content', margin: 'auto' }
    const [customers, setCustomers] = useState(90)
    const [orders, setOrders] = useState(58)
    const [visites, setVisites] = useState(315)
    const [income, setIncome] = useState(30584.92)

    return (
        <div className='summary-grid-container' style={{ fontSize: 15 }}>

            <div className="summary-section section1" style={{ marginLeft: 0 }} >
                <div>
                    <div className='counter-container'>
                        <CountUp end={customers} duration={customers / 50} />
                    </div>
                    <div style={sectionTitleStyle}>Customers</div>
                </div>
                <ViewMore link={'#'} />
            </div>


            <div className="summary-section section2">
                <div>
                    <div className='counter-container'>
                        <CountUp end={orders} duration={orders / 50} />
                    </div>
                    <div style={sectionTitleStyle}>Orders</div>
                </div>
                <ViewMore link={'#'} />
            </div>


            <div className="summary-section section3">
                <div>
                    <div className='counter-container'>
                        <CountUp end={visites} duration={visites / 200} />
                    </div>
                    <div style={sectionTitleStyle}>Website Visitors</div>
                </div>
                <ViewMore link={'#'} />
            </div>


            <div className="summary-section section4">
                <div>
                    <div className='counter-container'>
                        <CountUp end={income} duration={income / 15000} />
                        <span style={{ fontSize: 10 }}>LE.</span>
                    </div>
                    <div style={sectionTitleStyle}>Income</div>
                </div>
                <ViewMore link={'#'} />
            </div>

        </div >
    )
};
export default Summary;