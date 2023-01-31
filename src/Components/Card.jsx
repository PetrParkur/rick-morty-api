import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFav, deleteFavRick } from '../redux/slices/favRick';
import { deleteRick, getRick } from '../redux/slices/rickSlice';
import './card.css';

export default function Card() {
  const rick = useSelector((state) => state.rick);
  const favorite = useSelector((state) => state.favorite);
  const [isShowFav, setIsShowFav] = useState(false);

  const dispatch = useDispatch();
  const handleChange = () => {
    setIsShowFav(!isShowFav);
  };
  useEffect(() => {
    dispatch(getRick());
  }, []);
  const showingCard = isShowFav ? favorite : rick;

  return (
    <>
      <button className="filterBtn" type="button" onClick={handleChange}>Показать избранные карточки</button>

      <div className="cards">
        {showingCard.map((el) => (
          <div className="oneCard" key={el.id}>
            {favorite.map((a) => a.id).includes(el.id)
              ? (

                <button className="dis card__svg" type="button" aria-label="Dislike" onClick={() => dispatch(deleteFavRick(el.id))} />
              ) : (
                <button className="fav card__svg" type="button" aria-label="Like" onClick={() => dispatch(addFav(el))} />

              )}
            <button className="del card__svg" type="button" aria-label="Delete" onClick={() => dispatch(deleteRick(el.id))} />
            <img
              className="img"
              src={el.image}
              alt=""
            />
            <h3>{el.name}</h3>
            <h4>{el.location.name}</h4>
            {(() => {
              if (el.status === 'Dead') {
                return <div className="badge bg-danger fs-5">{el.status}</div>;
              } if (el.status === 'Alive') {
                return <div className=" badge bg-success fs-5">{el.status}</div>;
              }
              return <div className="badge bg-secondary fs-5">{el.status}</div>;
            })()}
          </div>
        ))}
      </div>
    </>
  );
}
