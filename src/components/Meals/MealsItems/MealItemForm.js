import {useRef,useState} from 'react';
import Input from '../../UI/Input';
import clasess from './MealItemForm.module.css';
const MealItemForm = (props) =>{
    const[amountIsvalid,setAmountIsValid]=useState(true);
    const amountInpurRef=useRef();
    const submitHandler= event =>{
        event.preventDefault();
        const enteredAmount=amountInpurRef.current.value;
        const enteredAmountNumber=+enteredAmount;
        if(enteredAmount.trim().length ===0 ||enteredAmountNumber < 1 || enteredAmountNumber >5){
            setAmountIsValid(false);
            return ;
        }
        props.onAddToCart(enteredAmountNumber);
    };

    return (
        <form className={clasess.form} onSubmit={submitHandler}>
          <Input 
          ref={amountInpurRef}
          label='Amount'
           input={{
              id:'Amount',
              type:'number',
              min:'1',
              max:'5',
              step:'1',
              defaultValue:'1',
          }}/>
          <button>+ add</button>
          {! amountIsvalid && <p>Please enter a valid amount(1-5)!</p>}
        </form>
    );
};

export default MealItemForm;