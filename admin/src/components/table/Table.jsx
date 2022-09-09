import React from "react";
import "./table.scss";
import {
  TableContainer,
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  Paper,
} from "@mui/material";
import number from "../../utils/number";
import { useSelector } from "react-redux";

const List = () => {
  const { orders } = useSelector((state) => state.orders);
  const resultOrders = orders?.data;
  return (
    <div>
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple-table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Tracking ID</TableCell>
              <TableCell className="tableCell">Customer</TableCell>
              <TableCell className="tableCell">Address</TableCell>
              <TableCell className="tableCell">Amount</TableCell>
              <TableCell className="tableCell">Payment Method</TableCell>
              <TableCell className="tableCell">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {resultOrders?.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="tableCell">{order.id}</TableCell>
                <TableCell className="tableCell">
                  <div className="cellWrapper">{order.source.name}</div>
                </TableCell>
                <TableCell className="tableCell">
                  {order.source.address_country}
                </TableCell>
                <TableCell className="tableCell">
                  {number(order.amount)} VND
                </TableCell>
                <TableCell className="tableCell">
                  <span className="method">
                    {order.payment_method_details.type}
                  </span>
                </TableCell>
                <TableCell className="tableCell">
                  <span className={`status ${order.status}`}>
                    {order.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default List;
