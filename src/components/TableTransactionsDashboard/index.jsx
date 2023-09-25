import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { formatCurrencyRupiah } from "../../utils/formatNumber";

function TableTransactionDashboard(props) {
  const data = [...props.data].slice(0,14) || [];
  return (
    data && (
      <TableContainer className="h-[40vh] overflow-scroll">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align={"center"} className="text-bold">
                No
              </TableCell>
              <TableCell align={"center"} className="text-bold">
                Item Details
              </TableCell>
              <TableCell align="center" className="text-bold">
                Total Price
              </TableCell>
              <TableCell align="center" className="text-bold">
                Username
              </TableCell>
              <TableCell align="center" className="text-bold">
                Email
              </TableCell>
              <TableCell align="center" className="text-bold">
                Phone
              </TableCell>
              <TableCell align="center" className="text-bold">
                Status Payment
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.map((item, i) => (
                <TableRow
                  key={i}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <p className="text-bluePrimary">{i + 1}</p>
                  </TableCell>
                  <TableCell>
                    <div className="flex md:flex-row flex-col items-center gap-4 w-100">
                      <img
                        src={`${item.id_product.thumbnailUrl}`}
                        alt=""
                        className="w-10 h-10 md:w-[60px] md:h-[60px] rounded-xl "
                        style={{
                          boxShadow: "-3px 4px 15px 2px rgba(81, 70, 159, 0.2)",
                          border: "1px solid #D9D9D9",
                        }}
                      />
                      <p className="text-bluePrimary">{item.id_product.name}</p>
                    </div>
                    {/* {item.id_product.name} */}
                  </TableCell>

                  <TableCell align="center">
                    <p
                      className="truncate text-bluePrimary text-ellipsis"
                      style={{ maxWidth: "6rem" }}
                    >
                      {formatCurrencyRupiah(item.total_price)}
                    </p>
                  </TableCell>
                  <TableCell
                    className="truncate text-bluePrimary text-ellipsis"
                    align="center"
                  >
                    <p
                      className="truncate text-bluePrimary text-ellipsis"
                      style={{ maxWidth: "5rem" }}
                    >
                      {item.id_user.username}
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p
                      className="truncate text-bluePrimary text-ellipsis"
                      style={{ maxWidth: "6rem" }}
                    >
                      {item.id_user.email}
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p
                      className="truncate text-bluePrimary text-ellipsis"
                      style={{ maxWidth: "6rem" }}
                    >
                      {item.id_user.no_telpon}
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p
                      className={`capitalize ${
                        item.statusPayment === "success"
                          ? "text-success"
                          : "text-danger"
                      }`}
                    >
                      {item.statusPayment}
                    </p>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  );
}

export default TableTransactionDashboard;
