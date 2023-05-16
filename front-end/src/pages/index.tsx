import Link from 'next/link';
import { MouseEventHandler, useState } from 'react';

function MyButton({ count, onClick }: { count: number; onClick: MouseEventHandler }): JSX.Element {


  return (
    <>
      <button onClick={onClick}>Click me {count}</button><br />
    </>
  );

}

function NavigatToPage({ uri, resourceName }: { uri: string, resourceName: string }) {
  return (
    <>
      <Link href={uri}>{resourceName}</Link>
    </>
  );
}

export default function Home() {
  let [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }


  return (
    <>
      <h1>Hello Task!</h1>
      <NavigatToPage uri='/problems' resourceName='Navigate to Problems' /><br />
      <NavigatToPage uri='/executions' resourceName='Navigate to Executions' />

    </>
  )
}
