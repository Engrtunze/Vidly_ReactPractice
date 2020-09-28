import React from 'react';

const Input = ({ name, label, error, ...rest}) => {
    return (
        <div>
            <div className="form-group ">
                <label htmlFor={name}>{label}</label>
                <input
                 //   autoFocus
                 //    value={value}
                 //    onChange={onChange}
                    // ref={this.username}
                    {...rest}
                    id={name}
                    name={name}
                    // type={type}
                    className="form-control"
                />
                {error && <div className="alert alert-danger"> {error}</div>}
            </div>
        </div>
    );
};

export default Input;