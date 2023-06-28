import React from 'react';

import './Users.sass';

const Users = () => {
    return (
        <section className="container block-users">
            <h2 className="block-title">Users</h2>
            <table className="users-table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>username</th>
                        <th>email</th>
                        <th>address</th>
                        <th>phone</th>
                        <th>website</th>
                        <th>company</th>
                    </tr>
                </thead>
                <tbody>
                    <tr id="1">
                        <td>1</td>
                        <td>Leanne Graham</td>
                        <td>Bret</td>
                        <td>Sincere@april.biz</td>
                        <td>Kulas Light, Apt. 556, Gwenborough</td>
                        <td>1-770-736-8031 x56442</td>
                        <td>hildegard.org</td>
                        <td>Romaguera-Crona</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
};

export default Users;