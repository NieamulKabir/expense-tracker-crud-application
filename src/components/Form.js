import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/exports';
import { createTransaction } from '../features/transaction/transactionSlice';

const Form = () => {

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [amount, setAmount] = useState('');

    const dispatch=useDispatch();
    const {isLoading,isError}=useSelector((state)=>state.transaction)

    const handleCreate = (e) => {
        e.preventDefault()
        dispatch(createTransaction({
            name,
            type,
            amount: Number(amount)
        }))
    }

    return (
        <div className="form">
            <h3>Add new transaction</h3>

            <form onSubmit={handleCreate}>
                <div className="form-group">
                    <label >Name</label>
                    <input
                        required
                        type="text"
                        name="name"
                        placeholder="enter title"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="form-group radio">
                    <label >Type</label>
                    <div className="radio_group">
                        <input
                            required
                            type="radio"
                            value="income"
                            name="type"
                            checked={type === 'income'}
                            onChange={() => setType('income')}
                        />
                        <label>Income</label>
                    </div>
                    <div className="radio_group">
                        <input
                            required
                            type="radio"
                            value="expense"
                            name="type"
                            placeholder="Expense"
                            checked={type === 'expense'}
                            onChange={() => setType('expense')}

                        />
                        <label >Expense</label>
                    </div>
                </div>

                <div className="form-group">
                    <label>Amount</label>
                    <input
                        required
                        type="number"
                        placeholder="enter amount"
                        name="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}

                    />
                </div>

                <button disabled={isLoading} className="btn" type='submit'>Add Transaction</button>
                {
                    !isLoading && isError && <p className='error'>There was an error occurred</p>
                }
            </form>
            <button className="btn cancel_edit">Cancel Edit</button>
        </div>
    );
};

export default Form;