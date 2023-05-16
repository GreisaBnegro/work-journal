import { useRouter } from 'next/router';
import style from './executionsAdd.module.css'
import useSWR from 'swr';



const urlStatus = `http://${process.env.apiServer}/status`;
const urlUser = `http://${process.env.apiServer}/user`;
const urlExecution = `http://${process.env.apiServer}/executions`;

const fetcher = (...args) => fetch(...args).then((res) => res.json())

// function generateDropdown({data}: {data: any}){
function generateDropdown(data: any, dropdownLabel: string, dropdownName: string, dropdownId: string) {
    if (!data)
        return '';

    let options = Array.from(data.data).map((row: any) => <option key={row.ID} value={row.ID}>{!row.Name ? row.FullName : row.Name}</option>);
    return (
        <>
            <label htmlFor={dropdownId}>{dropdownLabel}</label>
            <select name={dropdownName} id={dropdownId}>
                {options}
            </select>
        </>
    );
}

export default function ExecutionsAdd() {
    const router = useRouter();
    const { data: status, error: statusError } = useSWR(urlStatus, fetcher);
    const { data: user, error: userError } = useSWR(urlUser, fetcher);

    if (statusError) return <div>Failed to load status</div>
    if (userError) return <div>Failed to load users</div>
    // if (!status) return <div>Loading...</div>
    // if (!user) return <div>Loading...</div>

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        // Get data from the form.
        const data = {
            actionName: event.target.actionName.value,
            status: event.target.status.value,
            ExecutionDate: event.target.ExecutionDate.value,
            ExecuteTime: event.target.ExecuteTime.value,
            actionuser: event.target.actionuser.value,
        };

        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data);

        // Form the request for sending data to the server.
        const options = {
            // The method is POST because we are sending data.
            method: 'POST',
            // Tell the server we're sending JSON.
            headers: {
                'Content-Type': 'application/json',
            },
            // Body of the request is the JSON data we created above.
            body: JSONdata,
        };

        // Send the form data to our forms API on Vercel and get a response.
        const response = await fetch(urlExecution, options);

        // Get the response data from server as JSON.
        // If server returns the name submitted, that means the form works.
        const result = await response.json();

        if (result.message === "execution successfully created")
            router.push("/executions");

    }

    return (
        <>
            <h1>Add new Execution</h1>
            <form onSubmit={handleSubmit} action={urlExecution} method='POST'>
                <div className={style.formGroup}>
                    <label htmlFor="actionName">Action</label>
                    <input type="text" name="actionName" id="actionName" />
                </div>

                <div className={style.formGroup}>
                    {
                        !status
                            ? <label>Loading...</label>
                            : generateDropdown(status, "Status", "status", "status")
                    }
                </div>

                <div className={style.formGroup}>
                    <label htmlFor="execution-date">Execution Date</label>
                    <input type="datetime-local" name="ExecutionDate" id="execution-date" />
                </div>

                <div className={style.formGroup}>
                    <label htmlFor="execute-time">Execute Time</label>
                    <input type="number" name="ExecuteTime" id="execute-time" />
                </div>

                <div className={style.formGroup}>
                    {
                        !user
                            ? <label>Loading...</label>
                            : generateDropdown(user, "Action Person", "actionuser", "action-user")
                    }
                </div>
                <input type="submit" value="Add execution" className='bg-white border-b mx-5 p-1' />
            </form>
        </>
    );
}