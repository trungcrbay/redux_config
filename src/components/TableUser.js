import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import axios from 'axios';
import { useEffect, useState, CSSProperties } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserRedux, fetchAllUsers } from '../action/actions';

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
};

const TableUser = (props) => {
    // const [listUsers, setListUsers] = useState();
    let [loading, setLoading] = useState(true);

    const dispatch = useDispatch();
    
    const listUsers = useSelector((state) => {
        return state.user.listUsers
    });

    const isLoading = useSelector((state) => {
        return state.user.isLoading
    });

    const isError = useSelector((state) => {
        return state.user.isError
    });



    // const fetchAllUser = async () => {
    //     const res = await axios.get("http://localhost:8081/users/all");
    //     const data = res && res.data ? res.data : [];
    //     setListUsers(data);
    // }

    //import fetchAllUsers() tu file actions 
    //=>> sau do fire ham fetchAllUsers() = dispatch(fetchAllUsers()) vs useEffect hook

    useEffect(() => {
        // fetchAllUser()
        dispatch(fetchAllUsers()); //fire action 
    }, []) //[] mang rong => chay 1 lan

    const handleDeleteUser = (user) => {
        dispatch(deleteUserRedux(user.id));
    }

    useEffect(() => {
        if (listUsers && listUsers.length > 0) {
            setLoading(false); // Đặt loading thành false khi có dữ liệu người dùng
        }
    }, [listUsers]); // Nghe sự thay đổi của mảng listUsers

    if (isError === false && isLoading === true) {
        return (
            <Container>
                <hr />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <p style={{ textAlign: 'center' }}>Loading data ...</p>
                    </tbody>
                </Table>
                <ClipLoader
                    color="hsla(166, 67%, 53%, 1)"
                    loading={loading}
                    size={35}
                    cssOverride={override}
                />
            </Container>
        )
    }

    if (isError === false && isLoading === false) {
        return (
            <Container>
                <hr />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUsers && listUsers.length > 0 && listUsers.map((item, index) => {
                            return (
                                <tr key={`users-${index}`}>
                                    <td>{index + 1}</td>
                                    <td>{item.email}</td>
                                    <td>{item.username}</td>
                                    <td>
                                        <button
                                            className='btn btn-danger'
                                            onClick={() => handleDeleteUser(item)}
                                        >Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
                <ClipLoader
                    color="hsla(166, 67%, 53%, 1)"
                    loading={loading}
                    size={35}
                    cssOverride={override}
                />
            </Container>
        )
    }

    if (isError === true && isLoading === false) {
        return (
            <Container>
                <hr />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <div>Something wrongs , please try again</div>
                    </tbody>
                </Table>
                <ClipLoader
                    color="hsla(166, 67%, 53%, 1)"
                    loading={loading}
                    size={35}
                    cssOverride={override}
                />
            </Container>
        )
    }

    return (
        <>
            {/* <Container>
                <hr />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isError === true ?
                            <>
                                <div>Something wrongs , please try again</div>
                            </>
                            :
                            <>

                                {isLoading === true ?
                                    <>
                                        <p style={{ textAlign: 'center' }}>Loading data ...</p>
                                    </>
                                    :
                                    <>
                                        {listUsers && listUsers.length > 0 && listUsers.map((item, index) => {
                                            return (
                                                <tr key={`users-${index}`}>
                                                    <td>{index + 1}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.username}</td>
                                                    <td>
                                                        <button
                                                            className='btn btn-danger'
                                                            onClick={() => handleDeleteUser(item)}
                                                        >Delete</button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </>
                                }

                            </>

                        }


                    </tbody>
                </Table>
                <ClipLoader
                    color="hsla(166, 67%, 53%, 1)"
                    loading={loading}
                    size={35}
                    cssOverride={override}
                />
            </Container> */}
        </>
    )
}

export default TableUser;