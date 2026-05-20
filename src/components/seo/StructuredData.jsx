/**
 * @param {{ data: object | object[] }} props
 */
export default function StructuredData({ data }) {
  const graphs = Array.isArray(data) ? data : [data];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graphs.length === 1 ? graphs[0] : graphs) }}
    />
  );
}
