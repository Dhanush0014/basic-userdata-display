import React, { useEffect, useState} from 'react'
import Card from '../UI/Card';
import Button from '../UI/Button';
import style from './../UI/AddUser.module.css';
import Error from './../UI/Error';


function AddUser(props) {

    const [enteredUserName, setUserName] = useState('');
    const [enteredAge, setAge] = useState('');
    const [error, setError] = useState();

    useEffect((error)=>{
        setError(error);
    },[])

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).',
            });
            return
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid  age.',
            });
            return
        }
        props.onNewUser(enteredUserName, enteredAge);
        setUserName('');
        setAge('');
    }

    const userNameHandler = event => {
        setUserName(event.target.value);
    }

    const ageHandler = event => {
        setAge(event.target.value);
    }

    const errorHandler = () => {
        console.log("confirmed");
        setError(null)
    }
    return (
        <div>
            {error &&
                (<Error
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                ></Error>)}
            <Card className={style.input}>
                <form onSubmit={addUserHandler}>
                    <div>
                        <label>Username</label>
                        <input
                            type="text"
                            value={enteredUserName}
                            onChange={userNameHandler}
                        />
                    </div>
                    <div>
                        <label>Age(in years)</label>
                        <input
                            type="number"
                            value={enteredAge}
                            onChange={ageHandler}
                        />
                    </div>
                    <div>
                        <Button type="submit">Add User</Button>
                    </div>
                </form>
            </Card>
        </div>
    )
}

export default AddUser