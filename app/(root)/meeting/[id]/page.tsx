const Meeting = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <h1>meeting room: #{params.id}</h1>
    </div>
  );
};

export default Meeting;
