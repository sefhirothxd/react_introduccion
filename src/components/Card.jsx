import React from 'react';

const Card = ({ cards }) => {
  return (
    <div>
      <div className="container-cards">
        {cards.map(({ name, id, background, icon, totalQuizzes, users }) => {
          return (
            <div className="card" key={id}>
              <div className="card-image">
                <img
                  className="card-image--background"
                  src={
                    background ||
                    'https://storage.googleapis.com/bucket-larnu/media/business/153/images/BO64E73I.png'
                  }
                  alt={name}
                />
                <img className="card-image--icon" src={icon} alt={name} />
              </div>
              <div className="card-content">
                <h3 className="card-title">{name}</h3>
                <p className="card-text">Total Quizzes: {totalQuizzes}</p>
                <p className="card-text">User: {users}</p>
                <a
                  href="https://larnu.app/"
                  target="_blank"
                  className="btn btn-primary"
                >
                  Go to Larnu
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
