import { useEffect, useState } from "react";

const PercentageBar = ({ max, value, label }) => {
    const [percent, setPercent] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setPercent((value / max) * 100)
        }, 100);
    }, [])

    return (
        <div>
            <p style={{ fontWeight: 'bold' }}>{label}</p>
            <div style={{ height: 15, width: '100%', background: '#ededed', borderRadius: 2, overflow: 'hidden' }}>
                <div style={{ width: `${percent}%`, height: 15, background: '#ef9700', transition: 'all 0.6s cubic-bezier(0.52, 0.22, 0.29, 0.82) 0s' }}></div>
            </div>
        </div>
    )
};
export default PercentageBar;