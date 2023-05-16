import useSWR from 'swr';
import Link from 'next/link';

const url = `http://${process.env.apiServer}/executions`;
const fetcher = (...args) => fetch(...args).then((res) => res.json())
// const fetcher = (url: string) => fetch(url, { method: 'GET', mode: 'no-cors', }).then(function (res) { console.log(url); return res.json(); })
const sharedTableStyles = "px-1";

function getNumberOfWeek(date: string) {
    const today: Date = new Date(date);
    const firstDayOfYear: Date = new Date(today.getFullYear(), 0, 1);
    const pastDaysOfYear = (today - firstDayOfYear) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}

function formatDate(date: Date) {
    const [month, day, year] = [
        date.getMonth(),
        date.getDate(),
        date.getFullYear(),
    ];

    return `${day}.${month}.${year}`;
}

function generateDataRow({ data }: { data: any }) {

    let rows = Array.from(data).map((row: any) => <tr key={row.ID} className='bg-white border-b dark:bg-gray-900 dark:border-gray-700'>
        <td className={sharedTableStyles}>{row.Action}</td>
        <td className={sharedTableStyles}>{row.gbk_status.Name}</td>
        <td className={sharedTableStyles}>{formatDate(new Date(row.ExecutionDate))}</td>
        <td className={sharedTableStyles}>{row.ExecutionTime}</td>
        <td className={sharedTableStyles}>{getNumberOfWeek(row.ExecutionDate)}</td>
        <td className={sharedTableStyles}>{row.gbk_user.FullName}</td>
    </tr>);

    return rows;

}


export default function Executions() {
    const { data, error } = useSWR(url, fetcher)

    // console.log(data);

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    return (<div className='container mx-auto px-4'>
        <h1>List of Executions</h1>
        <Link href={"/executionsAdd"}>Add</Link>
        <table className="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                <tr>
                    <th className={sharedTableStyles}>Action take</th>
                    <th className={sharedTableStyles}>Status</th>
                    <th className={sharedTableStyles}>Date of action</th>
                    <th className={sharedTableStyles}>Action time</th>
                    <th className={sharedTableStyles}>Week</th>
                    <th className={sharedTableStyles}>Action person</th>
                </tr>
            </thead>
            <tbody>
                {generateDataRow(data)}
            </tbody>
        </table>
    </div>);
}