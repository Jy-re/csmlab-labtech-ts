import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import CircleIcon from '@mui/icons-material/Circle';
import { BiColorFill } from 'react-icons/bi';

function Reports() {

    return (
        <section className="content">
            <div className="titleHeader">
                <div className='titleName'>Reports</div>
            </div>
            
            <div className="printReportContainer">
                <div className='printIcon'>
                    <LocalPrintshopIcon style={{ color: '#8C0000', alignSelf: 'flex-start' }} />
                </div>
                <div className='printReportLabels'>
                    <div className='genrepTitle'><h2>Generate Reports (Print)</h2></div>
                    <div className='genrepNote'><p>Click the button in the right to print PDF Form of Summaries</p></div>
                </div>
                <div className='genRepBtn'><button className='genRep'>Generate Reports</button></div>
            </div>
            <div className='summariess'>
                <div className="inventorySummaryReports">
                    <div>
                        <div className='titleInventorybullet'>
                            <div><CircleIcon style={{ color: '#FBB217', width: 15, height: 15, marginTop: 5}}/></div>
                            <div className='inventorySummaryTitle'><h2>Inventory</h2></div>
                        </div>
                    </div>
                    <div className='totalEquip'> <p><span className='totalNumberEquip'>235</span> Total Equipment</p></div>
                    <div className='monthlySummary'>
                        <div className='totalGlass'> <p><b className='totalGlassware'>235</b> Total Glassware</p></div>
                        <div className='totalGlass'> <p><b className='totalGlassware'>235</b> Total Miscellaneous</p></div>
                    </div>
                </div>

                <div className="transactionSummaryReports">
                    <div className='titleInventorybullet'>
                        <div><CircleIcon style={{ color: '#4172BA', width: 15, height: 15, marginTop: 5}} /></div>
                        <div className='inventorySummaryTitle'><h2>Transactions</h2></div> 
                    </div>
                    
                    <div className='totalEquip'> <p><b className='totalNumberEquip'>235</b> Total Transactions</p></div>
                    <div className='monthlySummary'>
                        <div className='totalGlass'> <p><b><span className='totalGlassware'>235</span> November 2023</b></p></div>
                        <div className='totalGlass'> <p><b className='totalGlassware'>235</b> October 2023</p></div>
                        <div className='totalGlass'> <p><b className='totalGlassware'>235</b> September 2023</p></div>
                    </div>
                    
                </div>
            </div>
            
        </section>
    );
}

export default Reports;