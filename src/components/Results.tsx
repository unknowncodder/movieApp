export default function Results({ results }) {
  return (
    <div>
      {results.map((result) => (
        <div>{result.title}</div>
      ))}
    </div>
  );
}
