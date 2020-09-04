import React from 'react';
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table =(props) => {
    const {columns, sortColumn, onSort, data} = props;

    return (
        <table className="table">
            <TableHeader

                column={columns}
                sortColumn={sortColumn}
                onSort={onSort}
            />

            <TableBody
                columns={columns}
                data={data}
            />

            {/*<tbody>*/}
            {/*/!*{this.state.movies.map(movie =>(  *!/*/}
            {/*{moviesPag.map(movie => (*/}
            {/*    <tr key={movie._id}>*/}
            {/*        <td>{movie.title}</td>*/}
            {/*        <td>{movie.genre.name}</td>*/}
            {/*        <td>{movie.numberInStock}</td>*/}
            {/*        <td>{movie.dailyRentalRate}</td>*/}
            {/*        <td>*/}
            {/*            <Like liked={movie.liked} onClick={() => onLike(movie)}/>*/}
            {/*        </td>*/}
            {/*        <td>*/}
            {/*            <button onClick={() => onDelete(movie)}*/}
            {/*                    className="btn btn-danger btn-sm">Delete*/}
            {/*            </button>*/}
            {/*        </td>*/}
            {/*    </tr>))}*/}

            {/*</tbody>*/}


        </table>
    );
}

export default Table;