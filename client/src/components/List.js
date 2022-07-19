import React, { Fragment } from "react";

//Components
import Todos from "./Todos";

const List = () => {
    return (
        <Fragment>
            <table className="table mt-5 text-center">
            <thead>
            <tr>
                <th>Description</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
                <Todos />
            </tbody>
        </table>
        </Fragment>
    );
};

export default List;