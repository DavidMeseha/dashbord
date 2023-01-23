const Header = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0 5px 15px 5px' }}>
            <h3 style={{ color: '#9f9f9f' }}>Dashboard</h3>
            <div>
                <div style={{ width: 30, height: 30, borderRadius: 999, background: '#ccc', margin: 'auto' }}></div>
                <p style={{ fontSize: '0.8rem' }}>David M.</p>
            </div>
        </div>
    )
};
export default Header;