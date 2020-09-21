import React from 'react';
import { CardImg, Card, CardBody, CardTitle, Button } from 'reactstrap';

const Users = ({ users }) => {
    return (
        <div className="row justify-content-center m-auto">
            {users.map((user, i) => {
                return (<div className="col-md-4 mb-3">
                    <Card key={i}>
                        <CardImg top width="100%" src={user.avatar_url} alt={user.login} />
                        <CardBody>
                            <CardTitle>
                                {user.login}
                            </CardTitle>
                            <a href={`/${user.login}`}>
                                <Button>More</Button>
                            </a>
                        </CardBody>
                    </Card>
                </div>
                )
            })}
        </div>
    );
}
export default Users;