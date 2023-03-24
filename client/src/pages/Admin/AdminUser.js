import * as React from 'react';
import { useEffect, useState } from "react";
import FullEditDataGrid from "mui-datagrid-full-edit";
import {list, update, remove } from "api/user";
import auth from 'api/auth/auth-helper'
import AdminHeader from './LayoutAdmin'
import { Card, Container } from '@mui/material';

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
        list(signal).then((result) => {
            if (!result) {
                // setRedirectToSignin(true)
            } else {
                // setAuctions(result);
                setRows(result.results);
            }
        })
    }, []);

    const onSaveRow = (id, updatedRow, rows, oldRow) =>{
        const jwt = auth.isAuthenticated()
        update({
            userId: updatedRow._id
        }, {
            t: jwt.token
        }, updatedRow).then((data) => {
            if (data && data.error) {
                // setValues({...values, error: data.error})
                console.log("error!");
            } else {
                setRows(rows.map(r => (r.id === updatedRow.id ? {...data}: r)));
            }
        })
    };

    const onDeleteRow = (id, oldRow, rows) => {
        // sellerController.deleteRow(id).then((res)=>{
        //     const dbRow = res.data;
        //     setRows(rows.filter(r=> r.id !== dbRow.id));
        // }).catch((err)=>{
        //     setRows(rows);
        // });

        const jwt = auth.isAuthenticated()
        remove({
            userId: id
        }, {t: jwt.token}).then((data) => {
            if (data && data.error) {
                console.log(data.error)
                setRows(rows);
            } else {
                const dbRow = data;
                setRows(rows.filter(r=> r.id !== dbRow.id));
            }
        })
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
    { field: '_id', headerName: 'Id', width: 50 , hide: true, align:"center", type:'number', editable: false},
    { field: 'no', headerName: 'No', width: 50 , align:"center", type:'number', editable: false},
    { field: 'email', headerName: 'Email', width: 300 , headerAlign:'center', type:'string',  align:"center", editable: true},
    { field: 'name', headerName: 'Name', width:150,  headerAlign:'center', type:'string', editable: true, align: "center"},
    { field: 'role', headerName: 'Role', width:150,  headerAlign:'center', type:'singleSelect', editable: true, align: "center", valueOptions: [
        "customer", "company", "admin", "dealer"
    ]}
];




