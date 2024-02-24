
const TableRow = ({data}) => {

    return (
      <tr>
        <td>{data.id}</td>
        <td>{data.name}</td>
        <td>
          <img src={data.image} alt={data.name}/>
        </td>
        <td>{data.symbol}</td>
        <td>{data.current_price}</td>
        <td>{data.total_volume}</td>
      </tr>
    );

}

export default TableRow;