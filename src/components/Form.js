import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {setTransaction} from '../store/reducer'
import {store} from '../store/store'

export default function Form({toggleOff}) {

    const dispatch = useDispatch()

    const {register, handleSubmit, resetField} = useForm();

    const onSubmit = async (data) => {
        if(!data) return {};
        const newTx = {
            id: new Date().getTime(),
            name: data.name,
            type: data.type,
            amount: parseFloat(data.amount)/*,
            date: new Date()*/
        };
        console.log(typeof(newTx.amount))
        if (newTx.amount === 0 || newTx.amount > 0 || newTx.amount < 0) {
            dispatch(setTransaction(newTx))
        }
        
        resetField('name');
        resetField('amount')
        toggleOff()
    }

  return (
    <div className="form max-w-sm mx-auto w-96">
        
        <h1 className='font-bold pb-4 text-xl'>Add Transaction</h1>

        <form id='form' onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4">
                <div className="input-group">
                    <input type="text" {...register('name')} placeholder='Name' className='form-input' />
                </div>
                <select className='form-input' {...register('type')}>
                    <option value="Investment" defaultValue>Investment</option>
                    <option value="Expense">Expense</option>
                    <option value="Savings">Savings</option>
                </select>
                <div className="input-group">
                    <input type="text" {...register('amount')} placeholder='Amount' className='form-input' />
                </div>
                <div className="submit-btn">
                    <button className='border py-2 text-white bg-indigo-500 w-full'>Make Transaction</button>
                </div>
            </div>    
        </form>

    </div>
  )
}
