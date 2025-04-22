const SkillComponent = ({ titel, skill }) => {
  return (
    <div>
      <h3>{titel}</h3>
      <ul>
        <li>{skill}</li>
      </ul>
    </div>
  );
};

export default SkillComponent;
