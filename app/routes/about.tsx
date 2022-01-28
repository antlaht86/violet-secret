import { useLoaderData } from "remix";

export function loader() {
  return [
    { id: 1, name: "Jack" },
    { id: 2, name: "Mary" },
    { id: 3, name: "Diana" },
    { id: 4, name: "George" },
  ];
}

export default function About() {
  const data = useLoaderData<Array<{ id: number; name: string }>>();
  return (
    <div>
      <h1>About</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
