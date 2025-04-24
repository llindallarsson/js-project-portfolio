export const ExperienceComponent = ({ location, title, date }) => {
  return (
    <>
      <div>{emoji}</div>
      <div>
        <h3>{location}</h3>
        <p>{title}</p>
        <p>{date}</p>
      </div>
    </>
  );
};
