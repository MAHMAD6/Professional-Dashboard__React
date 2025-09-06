import { AccountBalanceWallet, AttachMoney, AudiotrackOutlined, DesignServicesOutlined, Person3Outlined, TrendingDown } from '@mui/icons-material'
import './dashboard.css'
import CreditCard from '../../components/CreditCard/creditCard'
import DualBarChart from '../../components/DualBarChart/dualBarChart'

export default function Dashboard() {
    return (
        <section className='mainContent'>
            <div className="kpiWrapper">
                <div className="kpi">
                    <div className="iconWrapper balanceIconWrapper">
                        <AttachMoney className='balanceIcon' />
                    </div>
                    <p className='kpiHeading'>My Balance</p>
                    <p className='kpiValue'>$12,750</p>
                </div>

                <div className="kpi">
                    <div className="iconWrapper incomeIconWrapper">
                        <AccountBalanceWallet className='incomeIcon' />
                    </div>
                    <p className='kpiHeading'>Income</p>
                    <p className='kpiValue'>$5,600</p>
                </div>

                <div className="kpi">
                    <div className="iconWrapper expenseIconWrapper">
                        <TrendingDown className='expenseIcon' />
                    </div>
                    <p className='kpiHeading'>Expense</p>
                    <p className='kpiValue'>$3,460</p>
                </div>

                <div className="kpi">
                    <div className="iconWrapper saleIconWrapper">
                        <AttachMoney className='saleIcon' />
                    </div>
                    <p className='kpiHeading'>Total Sale</p>
                    <p className='kpiValue'>$7,920</p>
                </div>
            </div>

            <div className="lastTransactionsSection">
                <h3 className='lastTransactionsHeading'>Last Transactions</h3>
                <table className='lastTransactionsTable'>
                    <tbody>
                        <tr>
                            <td className='tableIconsWrapper shoppingIcon'>
                                <AudiotrackOutlined />
                            </td>
                            <td>
                                <p className='lastTransactionsTableHeading'>Spotify Subscription</p>
                                <p className='lastTransactionsDate'>25 Jan 2021</p>
                            </td>
                            <td className='lastTransactionsType'>Shopping</td>
                            <td className='lastTransactionsCardNumber'>1234 ****</td>
                            <td className='lastTransactionsCardStatus'>Pending</td>
                            <td className='lastTransactionsCardAmount Debit'>-$150</td>
                        </tr>
                        <tr>
                            <td className='tableIconsWrapper serviceIcon'>
                                <DesignServicesOutlined />
                            </td>
                            <td>
                                <p className='lastTransactionsTableHeading'>Mobile Service</p>
                                <p className='lastTransactionsDate'>23 Jan 2021</p>
                            </td>
                            <td className='lastTransactionsType'>Entertainment</td>
                            <td className='lastTransactionsCardNumber'>4321 ****</td>
                            <td className='lastTransactionsCardStatus'>Completed</td>
                            <td className='lastTransactionsCardAmount Debit'>-$200</td>
                        </tr>
                        <tr>
                            <td className='tableIconsWrapper incomeIcon'>
                                <Person3Outlined />
                            </td>
                            <td>
                                <p className='lastTransactionsTableHeading'>Freelance Payment</p>
                                <p className='lastTransactionsDate'>21 Jan 2021</p>
                            </td>
                            <td className='lastTransactionsType'>Income</td>
                            <td className='lastTransactionsCardNumber'>8765 ****</td>
                            <td className='lastTransactionsCardStatus'>Completed</td>
                            <td className='lastTransactionsCardAmount Credit'>+$1,200</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="myCardSection">
                <h3 className='myCardSectionHeading'>My Card</h3>
                <h3 className='myCardSectionSeeAll'>See All</h3>
                <div className='creditCardWrapper'>
                    <CreditCard />
                </div>
            </div>

            <div className="BarChartSection">
                <h3 className="BarChartSectionHeading">Debit & Credit Overview</h3>

                <div className="barChartWrapper">
                    <h5 className="subheading">
                        <strong>$7,560</strong> Debited & <strong>$5,420</strong> Credited in this Week
                    </h5>

                    <div className="legend">
                        <span className="legend-item">
                            <span className="legend-color debit"></span> Debit
                        </span>
                        <span className="legend-item">
                            <span className="legend-color credit"></span> Credit
                        </span>
                    </div>
                    <div className="dualBarChartcontainer">
                        <DualBarChart className='barChart' />
                    </div>
                </div>
            </div>

        </section>
    )
}
