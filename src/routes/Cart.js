import userEvent from '@testing-library/user-event';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeAge } from './../store/userSlice.js';
import { changeList, minusCount, plusCount } from '../store.js';

function Cart() {

    let state = useSelector((state) => state);
    let dispatch = useDispatch();
    console.log(state.cartList);
    return (
        <div>
            <h4>{state.user.name}의 장바구니</h4>
            <h5>{state.user.age}</h5>
            <button onClick={() => {
                dispatch(changeList());
            }}>가나다순정렬</button>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.cartList.map(function (a, i) {
                            return (
                                <tr key={i}>
                                    <td>{state.cartList[i].id}</td>
                                    <td>{state.cartList[i].name}</td>
                                    <td>{state.cartList[i].count}</td>
                                    <td>
                                        <button onClick={() => { dispatch(plusCount(state.cartList[i].id)) }}>+</button>
                                        <button onClick={() => { dispatch(minusCount(state.cartList[i].id)) }}>-</button>
                                    </td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default Cart;