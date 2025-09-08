import {
    AccountBalanceWallet, AttachMoney, AudiotrackOutlined, DesignServicesOutlined, Person3Outlined, TrendingDown
    , 
} from '@mui/icons-material'

import './dashboard.css'
import CreditCard from '../../components/CreditCard/creditCard'
import DualBarChart from '../../components/DualBarChart/dualBarChart'
import KpiBox from '../../components/KpiBox/kpiBox'
import { invoices, transactions } from '../../dummyData';



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
                        {transactions.map((txn, index) => {
                            const IconComponent = {
                                AudiotrackOutlined,
                                DesignServicesOutlined,
                                Person3Outlined
                            }[txn.icon];

                            return (
                                <tr key={index}>
                                    <td className={`tableIconsWrapper ${txn.iconClass}`}>
                                        <IconComponent />
                                    </td>
                                    <td>
                                        <p className="lastTransactionsTableHeading">{txn.title}</p>
                                        <p className="lastTransactionsDate">{txn.date}</p>
                                    </td>
                                    <td className="lastTransactionsType">{txn.type}</td>
                                    <td className="lastTransactionsCardNumber">{txn.cardNumber}</td>
                                    <td className="lastTransactionsCardStatus">{txn.status}</td>
                                    <td
                                        className={`lastTransactionsCardAmount ${txn.amountType}`}
                                    >
                                        {txn.amount > 0 ? `+$${txn.amount}` : `-$${Math.abs(txn.amount)}`}
                                    </td>
                                </tr>
                            );
                        })}
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

            <div className="invoicesSection">
                <h3 className="invoicesHeading">Invoices Sent</h3>
                <div className="invoicesList">
                    {invoices.map((invoice, index) => (
                        <div className="invoiceItem" key={index}>
                            <div className={`invoiceIconWrapper ${invoice.iconClass}`}>
                                {invoice.icon}
                            </div>
                            <div className="invoiceDetails">
                                <p className="invoiceTitle">{invoice.title}</p>
                                <p className="invoiceTime">{invoice.time}</p>
                            </div>
                            <p className="invoiceAmount">${invoice.amount}</p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}
