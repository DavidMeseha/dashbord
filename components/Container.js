const Container = ({ children, title }) => {
    return (
        <div style={{}}>
            <div style={{ background: 'white', margin: '10px 0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 20px 15px 20px', borderBottom: '1px solid rgb(224 224 224)' }}>
                    <h3>{title || 'Title'}</h3>
                    <div>X</div>
                </div>
                <div style={{ height: 300, padding: '30px 30px 30px 30px', display: 'flex' }}>
                    {children}
                </div>
            </div>
        </div>
    )
};
export default Container;