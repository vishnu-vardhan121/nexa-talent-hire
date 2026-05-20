/**
 * One field: pick a suggestion from the list or type a custom value (HTML datalist combobox).
 */
export default function SelectOrCreateInput({
  id,
  listId,
  value,
  onChange,
  suggestions,
  placeholder,
  className,
  autoComplete = 'off',
}) {
  return (
    <>
      <input
        id={id}
        type="text"
        list={listId}
        className={className}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
      />
      <datalist id={listId}>
        {suggestions.map((item) => (
          <option key={item} value={item} />
        ))}
      </datalist>
    </>
  );
}
