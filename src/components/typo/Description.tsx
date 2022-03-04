const style: React.CSSProperties = {
  marginBottom: "30px",
  fontSize: "24px",
  fontWeight: "bold",
  color: "purple",
};
const Description = ({ desc }: { desc: string }) => {
  return <div style={style} dangerouslySetInnerHTML={{ __html: desc }}></div>;
};

export default Description;
