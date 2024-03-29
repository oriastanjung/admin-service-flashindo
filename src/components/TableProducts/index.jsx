import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { formatCurrencyRupiah } from "../../utils/formatNumber";
import Button from "../Button";

export default function TableProducts(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {props.columns.map((column) => (
                <TableCell
                  className="truncate"
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, i) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={i + 1}>
                    {props.columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          className="truncate max-w-[15ch] lg:max-w-[15ch] md:max-w-[12ch]"
                          //   style={{maxWidth : "12ch"}}
                          key={column.id}
                          align={column.align}
                        >
                          {column.format && typeof value === "number" ? (
                            column.format(value)
                          ) : column.id === "action" ? (
                            value.map((item) => {
                              return item;
                            })
                          ) : column.id === "servicer" ? (
                            <p className={`${value ? "font-bold" : ""}`}>
                              {value ? value : "Belum diambil"}
                            </p>
                            // <Button isPrimary> Ambil </Button>
                          ) : column.id === "status" ? (
                            <>
                              <p className={`capitalize font-bold ${value === "finish" ? "text-green-500" : value === "onprogress"?"text-bluePrimary" : "text-slate-400"}`}>{value}</p>
                            </>
                          ) : column.id === "purchase_price" ||
                            column.id === "sell_price" ? (
                            <p>{formatCurrencyRupiah(value)}</p>
                          ) : (
                            value
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10]}
        component="div"
        count={props.rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
