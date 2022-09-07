import React from 'react';
import './WidgetLg.scss';
const WidgetLg = () => {

    const Button = ({ type }) => {
        return (<button className={'widgetLgButton' + ' ' + type}>{type}</button>);
    }
    return (
        <div className='widgetLg'>
            <h3 className="widgetLgTitle">Latest Transactions</h3>
            <table className="widgetLgTable">
                <thead>
                    <tr className="widgetLgTr">
                        <th className="widgetLgTh">Customer</th>
                        <th className="widgetLgTh">Date</th>
                        <th className="widgetLgTh">Amount</th>
                        <th className="widgetLgTh">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src='https://www.w3schools.com/w3images/avatar6.png  ' className='widgetLgImg' alt='user avatar' />
                            <span className="widgetLgName">Susan Carol</span>
                        </td>
                        <td className="widgetLgDate">
                            2 Jun 2022
                        </td>
                        <td className="widgetLgAmount">
                            $122.02
                        </td>
                        <td className="widgetLgStatus">
                            <Button type='approved'></Button>
                        </td>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src='https://www.w3schools.com/w3images/avatar6.png  ' className='widgetLgImg' alt='user avatar' />
                            <span className="widgetLgName">Susan Carol</span>
                        </td>
                        <td className="widgetLgDate">
                            2 Jun 2022
                        </td>
                        <td className="widgetLgAmount">
                            $122.02
                        </td>
                        <td className="widgetLgStatus">
                            <Button type='declined'></Button>
                        </td>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src='https://www.w3schools.com/w3images/avatar6.png  ' className='widgetLgImg' alt='user avatar' />
                            <span className="widgetLgName">Susan Carol</span>
                        </td>
                        <td className="widgetLgDate">
                            2 Jun 2022
                        </td>
                        <td className="widgetLgAmount">
                            $122.02
                        </td>
                        <td className="widgetLgStatus">
                            <Button type='pending'></Button>
                        </td>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src='https://www.w3schools.com/w3images/avatar6.png  ' className='widgetLgImg' alt='user avatar' />
                            <span className="widgetLgName">Susan Carol</span>
                        </td>
                        <td className="widgetLgDate">
                            2 Jun 2022
                        </td>
                        <td className="widgetLgAmount">
                            $122.02
                        </td>
                        <td className="widgetLgStatus">
                            <Button type='approved'></Button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default WidgetLg