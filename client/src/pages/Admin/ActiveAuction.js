import * as React from 'react';
import { useEffect, useState } from "react";
import FullEditDataGrid from "mui-datagrid-full-edit";
import {list, update, remove } from "api/user";
import auth from 'api/auth/auth-helper'
import AdminHeader from './LayoutAdmin'
import { Card, Container } from '@mui/material';
import { listOpen } from 'api/auction';

export default function UserManageGrid() {
    const [rows, setRawRows] = useState([]);
    const [loading, setLoading] = useState(false);

    const setRows = (rows)=> {
        return setRawRows([...rows.map((r, i)=>({...r, no: i + 1, id: r._id}))]);
    };
    useEffect(() => {
        jQuery("#wrapper").css("min-height", "");
        const abortController = new AbortController()
        const signal = abortController.signal
        listOpen(signal).then((result) => {
            if (!result) {
              // setRedirectToSignin(true)
            } else {
            //   setAuctions(result);
            let rowData = [];
            result.forEach(item => {
                item.sellerId = item.seller._id;
                item.seller = item.seller.name;
                if(item.winner){
                    item.winnerId = item.winner._id
                    item.winner = item.winner.name
                }
                if((new Date(item.bidStart) < new Date())&&(new Date(item.bidEnd) > new Date()))rowData.push(item);
                
            });
            setRows(rowData)
            }
          })
          return function cleanup(){
            abortController.abort()
        }
    }, []);

    const onSaveRow = (id, updatedRow, rows, oldRow) =>{
        // sellerController.saveRow(updatedRow).then((res)=>{
        //     const dbRow = res.data;
        //     setRows(rows.map(r => (r.id === updatedRow.id ? {...dbRow}: r)));
        // }).catch((err)=>{
        //     setRows(rows);
        // });
        // const jwt = auth.isAuthenticated()
        // update({
        //     userId: updatedRow._id
        // }, {
        //     t: jwt.token
        // }, updatedRow).then((data) => {
        //     if (data && data.error) {
        //         // setValues({...values, error: data.error})
        //         console.log("error!");
        //     } else {
        //         setRows(rows.map(r => (r.id === updatedRow.id ? {...data}: r)));
        //     }
        // })
    };

    const onDeleteRow = (id, oldRow, rows) => {
        // sellerController.deleteRow(id).then((res)=>{
        //     const dbRow = res.data;
        //     setRows(rows.filter(r=> r.id !== dbRow.id));
        // }).catch((err)=>{
        //     setRows(rows);
        // });

        // const jwt = auth.isAuthenticated()
        // remove({
        //     userId: id
        // }, {t: jwt.token}).then((data) => {
        //     if (data && data.error) {
        //         console.log(data.error)
        //         setRows(rows);
        //     } else {
        //         const dbRow = data;
        //         setRows(rows.filter(r=> r.id !== dbRow.id));
        //     }
        // })
    };

    const createRowData = (rows) => {
        const newId = Math.max(...rows.map((r)=>(r.id ? r.id : 0) * 1)) + 1;
        const newNo = Math.max(...rows.map((r)=>((r.no ? r.no : 0) * 1))) + 1;
        return {id: newId, no: newNo}
    };

    return (
        <>
        <AdminHeader />
        <Card sx={{paddingTop: '40px', paddingBottom: '40px'}}>
        <Container>
            <FullEditDataGrid
                columns={columns}
                rows={rows}
                onSaveRow={onSaveRow}
                onDeleteRow={onDeleteRow}
                createRowData={createRowData}
                defaultPageSize={10}
                loading={loading}
                onProcessRowUpdateError={(error) => {
                    console.error(error);
                }
                }
            />
        </Container>
        </Card>
        </>
    );
}

const columns = [
    { field: '_id',   headerName: 'Id', width: 50 , hide: true, align:"center", type:'number', editable: false},
    { field: 'no',   headerName: 'No', width: 50 , hide: true, align:"center", type:'number', editable: false},
    { field: 'itemName',   headerName: 'AuctionName', width: 120 , hide: false, align:"center", type:'string', editable: true},
    { field: 'bidStart',   headerName: 'Begining Time', width: 170 , hide: false, align:"center", type:'date', editable: true},
    { field: 'bidEnd',   headerName: 'Ending Time', width:170 , hide: false, align:"center", type:'date', editable: true},
    { field: 'startingBid',   headerName: 'Price', width: 120 , hide: false, align:"center", type:'string', editable: true},
    { field: 'sellerId',   headerName: 'SellerId', width: 120 , hide: true, align:"center", type:'string', editable: false},
    { field: 'seller',   headerName: 'Seller', width: 120 , hide: false, align:"center", type:'string', editable: true},
    { field: 'winnerId',   headerName: 'WinnerId', width: 120 , hide: true, align:"center", type:'string', editable: false},
    { field: 'winner',   headerName: 'Winner', width: 120 , hide: false, align:"center", type:'string', editable: true},
];




