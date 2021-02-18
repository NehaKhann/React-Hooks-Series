import React from 'react'

const Usersdata = ({users}) => {
    return (
        <div className="container-fluid mt-5">
        <h1 className="text-center"> USERS</h1>
        <div className="row text-center">
          {users.map((currentElement) => {
            return (
              <div className="col-10 col-md-4 mt-5" key={currentElement.id}>
                <div className="card p-2">
                  <div className="card-body">
                    <h4 className="card-title">{currentElement.name}</h4>
                    <p className="card-text"> Email :{currentElement.email} </p>
                    <p className="card-text">
                      {" "}
                      City :{currentElement.address.city}{" "}
                    </p>
                    <p className="card-text">
                      {" "}
                      Street :{currentElement.address.street}{" "}
                    </p>
                    <p className="card-text">
                      {" "}
                      Company :{currentElement.company.name}{" "}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    )
}

export default Usersdata
