import React from "react";

const Card = () => {
  return (
    <>
      <div className="row mt-5 p-2">
        <div className="col-sm-4 own">
          <div className="card">
            <div className="card-body">
              <img src="../assets/hang.png" alt="logo" />
              <div className="right-option-menu">
                <p>CAKE-BNB</p>
                <h5 className="m-2">Core</h5>
                <h5 className="m-2">40x</h5>
              </div>

              <p className="card-text ">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Cras justo odio</li>
            </ul>
          </div>
        </div>

        {/* <div className="col-sm-4 own">
          <div className="card ">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Cras justo odio</li>
            </ul>
          </div>
        </div>

        <div className="col-sm-4 own">
          <div className="card ">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Cras justo odio</li>
            </ul>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Card;
