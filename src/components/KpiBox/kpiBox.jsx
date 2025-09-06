import './kpiBox.css'

export default function KpiBox({ icon: Icon, iconClass, heading, value }) {
    return (
        <div className="kpi">
            <div className={`iconWrapper ${iconClass}`}>
                <Icon className={iconClass.replace('Wrapper', '')} />
            </div>
            <p className='kpiHeading'>{heading}</p>
            <p className='kpiValue'>{value}</p>
        </div>
    )
}
