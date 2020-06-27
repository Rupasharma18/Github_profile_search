import React, { useState } from 'react';
import { FormGroup, Form, InputGroup, Input, InputGroupAddon, Button } from 'reactstrap';

const Search = ({ searchUser }) => {
    const [query, setQuery] = useState('')

    const useInput = (e) => {
        const regex = /[A-Za-z]/
        const re = /^[0-9\b]+$/;
        if ((e.target.value === '' || regex.test(e.target.value)) || (e.target.value === '' || re.test(e.target.value))) {
            setQuery(e.target.value)
        }
        else{
            alert('nhi hai')
        }
       
    }

    return (
        <Form className='mt-5 mb-5'
            onSubmit={(e) => {
                e.preventDefault();
                searchUser(query);
            }}>
            <FormGroup>
                <InputGroup>
                    <Input placeholder="search github id..."
                        onChange={useInput}
                        value={query}
                    />

                    <InputGroupAddon addonType='append'>
                        <Button type='submit' disabled={!query} >search</Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}
export default Search;