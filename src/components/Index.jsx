import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="base__index flex__content__center">
      <div className="index"></div>
      <div className="index__intro ">
        <h2 className="">Welcome to Swiftana</h2>
        <div className="details mt">
          <p className="mt-2 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, doloribus? Eos eveniet cupiditate quae
            corpori Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum minus id culpa debitis corrupti
            incidunt nesciunt laboriosam!
          </p>
        </div>
        <div className="btn__group">
          <button className="btn start__btn btn__primary">
            <Link to="/signup" className="text__white">
              get started
            </Link>
          </button>
        </div>
        <p className="mt index__text">
          Have an account already?{' '}
          <Link to="/login" className="link__text__primary">
            login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Index;
