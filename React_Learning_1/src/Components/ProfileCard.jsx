function ProfileCard(p) {
  return (
    <div style={{
  border: "1px solid gray",
  padding: "10px",
  margin: "10px",
  borderRadius: "10px",
  backgroundColor : "green",
  color : "Black",
  fontFamily : "fantasy"
}}>
      <h1>{p.name}</h1>
      <p>{p.role}</p>
      <p>{p.age}</p>
      <hr/>
    </div>
  );
}

export default ProfileCard;