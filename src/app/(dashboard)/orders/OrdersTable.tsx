"use client";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { renderRole } from "@/lib/renderRole";
import React, { useEffect, useRef, useState } from "react";
// import AddEditUserDialog, { dialogType } from "./AddEditUserDialog";
// import { EmptyState, LoadingState } from "./helper";
// import { User } from "./page";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import TablePagination from "../Components/TablePagination";
import { Order_By, useGetOrdersQuery } from "@/graphql/generated";
import { EmptyState, LoadingState } from "../accounts/helper";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { orderType } from "../manage-orders/page";
import OrderItemDisplay from "../manage-orders/OrderItemDisplay";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formatReadableDate } from "../manage-orders/helper";

const defaultFilter = {
  status: "all",
};
const OrdersTable: React.FC = ({}) => {
  const [filter, setFilter] = useState({
    ...defaultFilter,
  });
  const perPageCount = 10;
  const [activePage, setActivePage] = useState(1);
  const [modalParams, setModalParams] = useState<{
    order?: orderType;
    status: boolean;
  }>({
    order: undefined,
    status: false,
  });

  const { data, loading } = useGetOrdersQuery({
    variables: {
      where: {
        status:
          filter.status !== "all"
            ? {
                _eq: filter.status,
              }
            : undefined,
      },
      orderBy: {
        created_at: Order_By.Desc,
      },
      limit: perPageCount,
      offset: (activePage - 1) * perPageCount,
    },
  });

  const totalPage = Math.ceil(
    (data?.orders_aggregate.aggregate?.count || 0) / perPageCount
  );

  const handleFilter = (key: keyof typeof filter, value: string) => {
    console.log({ ...filter, [key]: value });
    setFilter({
      ...filter,
      [key]: value,
    });
  };

  const dialogFragment = (
    <Dialog
      open={modalParams.status}
      modal
      onOpenChange={(b) =>
        setModalParams({
          ...modalParams,
          status: b,
        })
      }
    >
      <DialogContent className="" closeButton={true}>
        <DialogTitle></DialogTitle>
        {/* <div className="flex gap-4 flex-wrap w-full place-content-center"> */}
        {modalParams.order && <OrderItemDisplay order={modalParams.order} />}
        {/* </div> */}
      </DialogContent>
    </Dialog>
  );
  return (
    <>
      {dialogFragment}
      <div className="flex  mb-4 justify-between pt-4">
        <div className="flex space-x-4">
          <Select
            value={filter.status}
            onValueChange={(v) => handleFilter("status", v)}
          >
            <SelectTrigger className="capitalize min-w-[180px]">
              <SelectValue placeholder="Select Status" className="capitalize" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={"all"} className="capitalize">
                All Status
              </SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
              <SelectItem value="preparing">Preparing</SelectItem>
              <SelectItem value="ready-for-pickup">Ready For Pickup</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>

          <Button
            variant="outline"
            onClick={() => {
              setFilter({
                ...defaultFilter,
              });
            }}
          >
            Reset
          </Button>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Total Price</TableHead>
            <TableHead>Est. Pickup time</TableHead>
            <TableHead>Buyers Name</TableHead>
            <TableHead>Buyers Info</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.shortId}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell>₱ {order.total}</TableCell>
              <TableCell>{formatReadableDate(order.pickupTime)}</TableCell>
              <TableCell>{`${order.user?.firstname} ${order.user?.lastname}`}</TableCell>
              {/* <TableCell>{order.user.email}</TableCell> */}
              <TableCell>{`${order.user?.grade}-${order.user?.strand}-${order.user?.section}`}</TableCell>
              <TableCell className="text-right">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setModalParams({
                      status: true,
                      order: order,
                    });
                  }}
                >
                  View Order
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {loading && <LoadingState />}
      {!loading && data?.orders.length === 0 && <EmptyState />}
      <Separator className="my-4" />
      <TablePagination
        totalPages={totalPage}
        setActivePage={setActivePage}
        initialPage={activePage}
        loading={loading}
      />
    </>
  );
};
export default OrdersTable;
