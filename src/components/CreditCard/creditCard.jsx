import './creditCard.css'

export default function CreditCard({ balance, cardHolder, validThru, cardNumber }) {
    return (
        <div className="creditCard">
            <div className="cardTop">
                <div className="balanceSection">
                    <p className="balanceLabel">Balance</p>
                    <p className="balanceAmount">{balance ?? '$5,756'}</p>
                </div>
                <div className="chipIcon">
                    <img src='/Icons/chip_icon.svg' alt='chipIcon' />
                </div>
            </div>

            <div className="cardDetails">
                <div className="cardHolder">
                    <p className="label">CARD HOLDER</p>
                    <p className="value">{cardHolder ?? 'Eddy Cusuma'}</p>
                </div>
                <div className="validThru">
                    <p className="label">VALID THRU</p>
                    <p className="value">{validThru ?? '12/22'}</p>
                </div>
            </div>

            <div className="cardNumber">
                <p>{cardNumber ?? '3778 **** **** 1234'}</p>
                <img src='/Icons/mastercard_icon.svg' alt='mastercard' />
            </div>
        </div>
    );
}
