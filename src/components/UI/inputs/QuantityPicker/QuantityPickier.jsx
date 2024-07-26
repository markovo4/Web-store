import {Button} from "@mui/material";
import {styles} from "./styles.js";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {useState} from "react";
import {Input} from "antd";
import stylesInput from './input.module.scss';

const QuantityPicker = () => {
    const [amount, setAmount] = useState(1);

    const handleClick = (e) => {
        const {name} = e.currentTarget;
        setAmount(prevAmount => {
            const newAmount = name === 'minus' ? prevAmount - 1 : prevAmount + 1;
            return Math.min(Math.max(newAmount, 1), 50); // Ensuring value is between 1 and 50
        });
    };

    const handleChange = (e) => {
        const {value} = e.target;
        const newValue = Math.min(Math.max(Number(value), 1), 50); // Ensuring value is between 1 and 50
        setAmount(newValue);
    };

    return (
        <div style={styles.container}>
            <Button
                sx={styles.buttonMinus}
                onClick={handleClick}
                name={'minus'}
                variant={'contained'}
                fontSize={'small'}
            ><RemoveIcon/></Button>

            <Input
                style={styles.input}
                className={stylesInput.input}
                min={1}
                max={50}
                type={'number'}
                value={amount}
                onChange={handleChange}/>

            <Button
                sx={styles.buttonPlus}
                onClick={handleClick}
                name={'plus'}
                variant={'contained'}
            ><AddIcon fontSize={'small'}/></Button>
        </div>
    );
};

export default QuantityPicker;
