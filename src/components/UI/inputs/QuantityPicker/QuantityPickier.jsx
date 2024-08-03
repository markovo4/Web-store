import {Button} from "@mui/material";
import {styles} from "./styles.js";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {useState} from "react";
import {Input} from "antd";
import stylesInput from './input.module.scss';
import PropTypes from "prop-types";

const QuantityPicker = ({initialAmount = 1, onChange}) => {
    const [amount, setAmount] = useState(initialAmount);

    const handleClick = (e) => {
        const {name} = e.currentTarget;
        setAmount((prevAmount) => {
            const newAmount = name === 'minus' ? prevAmount - 1 : prevAmount + 1;
            const clampedAmount = Math.min(Math.max(newAmount, 1), 50);
            onChange(clampedAmount);
            return clampedAmount;
        });
    };

    const handleChange = (e) => {
        const {value} = e.target;
        const numericValue = Number(value);
        if (!isNaN(numericValue)) {
            const clampedValue = Math.min(Math.max(numericValue, 1), 50);
            setAmount(clampedValue);
            onChange(clampedValue);
        }
    };

    return (
        <div style={styles.container}>
            <Button
                sx={styles.buttonMinus}
                onClick={handleClick}
                name={'minus'}
                variant={'contained'}
                disabled={amount <= 1} // Disable minus button if amount is 1
            >
                <RemoveIcon fontSize={'small'}/>
            </Button>

            <Input
                style={styles.input}
                className={stylesInput.input}
                min={1}
                max={50}
                type={'number'}
                value={amount}
                onChange={handleChange}
            />

            <Button
                sx={styles.buttonPlus}
                onClick={handleClick}
                name={'plus'}
                variant={'contained'}
                disabled={amount >= 50} // Disable plus button if amount is 50
            >
                <AddIcon fontSize={'small'}/>
            </Button>
        </div>
    );
};

QuantityPicker.propTypes = {
    initialAmount: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}

export default QuantityPicker;
