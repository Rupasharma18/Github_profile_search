import React, { useState } from 'react';
import { FormGroup, Form, InputGroup,Input, InputGroupAddon, Button } from 'reactstrap';

const Search =({searchUser})=>{
    const [query, setQuery]=useState('')
    const useInput =(e)=>{
       setQuery(e.target.value)
    }
 
    return(
      <Form className='mt-5 mb-5' 
       onSubmit={(e)=>
        {e.preventDefault();
        searchUser(query);
      }}>
          <FormGroup>
              <InputGroup>
              <Input placeholder="search github id..."
              onChange={useInput}
              value={query}
             />
            
              <InputGroupAddon addonType='append'>
                  <Button type='submit'disabled={!query} >search</Button>
              </InputGroupAddon>
              </InputGroup>
          </FormGroup>
      </Form>
    )
}
export default Search;