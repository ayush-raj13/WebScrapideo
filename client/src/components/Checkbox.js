const Checkbox = ({ label, checked, onChange }) => {
  return (
    <div className="checkbox-wrapper">
      <label>
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span>&nbsp;&nbsp; {label}</span>
      </label>
    </div>
  );
};
export default Checkbox;