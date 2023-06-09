import React from 'react';
import { useDispatch } from 'react-redux';
import deleteImage from "../../assets/images/delete.svg";
import editImage from "../../assets/images/edit.svg";
import { editActive, removeTransaction } from '../../features/transaction/transactionSlice';
import thousandSeparator from '../../utils/thousandSeparator'

const Transaction = ({ transaction }) => {
    const { id,name, amount, type } = transaction || {};

    const dispatch=useDispatch();

    const handleEdit=()=>{
        dispatch(editActive(transaction))
    }
    const handleDelete=()=>{
        dispatch(removeTransaction(id));
    }

    return (
        <li className={`transaction ${type}`}>
            <p>{name}</p>
            <div className="right">
                <p>৳ {thousandSeparator(amount)}</p>
                <button className="link">
                    <img alt="Edit" onClick={handleEdit} className="icon" src={editImage} />
                </button>
                <button className="link">
                    <img alt="Delete" className="icon" 
                    onClick={handleDelete}
                    src={deleteImage} />
                </button>
            </div>
        </li>
    );
};

export default Transaction;