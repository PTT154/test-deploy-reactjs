import { memo } from 'react';

function Fruit(props) {
  const { data, onDelete } = props;
  console.log(data.id);
  return (
    <div>
      Id: {data.id} - Name: {data.name}
      <button className="ml-2" onClick={() => onDelete(data.id)}>Delete</button>
    </div>
  )
}

export default memo(Fruit);
