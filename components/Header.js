import useNavBar from "../hooks/useNavBar";

const Header = () => {
    //const { setState } = useNavBar()

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0 5px 15px 5px' }}>
            <div className="minue-icon" style={{ width: 30 }}>
                <div style={{ width: '100%', height: 5, background: 'rgb(159 159 159)', borderRadius: 20 }}></div>
                <div style={{ width: '100%', height: 5, background: 'rgb(159 159 159)', margin: '5px 0', borderRadius: 20 }}></div>
                <div style={{ width: '100%', height: 5, background: 'rgb(159 159 159)', borderRadius: 20 }}></div>
            </div>
            <h3 style={{ color: 'rgb(159 159 159)' }}>Dashboard</h3>
            <div>
                <div style={{ width: 30, height: 30, borderRadius: 999, background: 'rgb(159 159 159)', margin: 'auto' }}></div>
                <p style={{ fontSize: '0.8rem' }}>David M.</p>
            </div>
        </div>
    )
};
export default Header;