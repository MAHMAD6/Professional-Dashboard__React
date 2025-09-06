import { AccountBalanceWallet, AttachMoney, AudiotrackOutlined, DesignServicesOutlined, Person3Outlined, TrendingDown } from '@mui/icons-material'
import './dashboard.css'
import CreditCard from '../../components/CreditCard/creditCard'
import DualBarChart from '../../components/DualBarChart/dualBarChart'
import KpiBox from '../../components/KpiBox/kpiBox'

export default function Dashboard() {
    return (
        <section className='mainContent'>
            <div className="kpiWrapper">
                <KpiBox
                    icon={AttachMoney}
                    iconClass="balanceIconWrapper"
                    heading="My Balance"
                    value="$12,750"
                />
                <KpiBox
                    icon={AccountBalanceWallet}
                    iconClass="incomeIconWrapper"
                    heading="Income"
                    value="$5,600"
                />
                <KpiBox
                    icon={TrendingDown}
                    iconClass="expenseIconWrapper"
                    heading="Expense"
                    value="$3,460"
                />
                <KpiBox
                    icon={AttachMoney}
                    iconClass="saleIconWrapper"
                    heading="Total Sale"
                    value="$7,920"
                />
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
