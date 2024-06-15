import { useQuery } from "@tanstack/react-query";

export const Feed = () => {
  const { error, data, refetch, fetchStatus } = useQuery({
    queryKey: ["todos"],
    queryFn: () => fetch("/api/todos").then((res) => res.json()),
  });

  console.log({ error, fetchStatus });

  const renderContent = () => {
    if (fetchStatus === "fetching") {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>{error.message}</p>;
    }

    return (
      <>
        <ul>
          {data.todos.map((t) => (
            <li key={t.id}>{t.name}</li>
          ))}
        </ul>

        <button onClick={() => refetch()}>Refresh</button>
      </>
    );
  };

  return <main>{renderContent()}</main>;
};
