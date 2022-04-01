const CardImage = ({ url, title }) => {
  return (
    <div className="card rounded-md mt-2">
      <div className="card__body">
        <img src={url} alt={url} className="w-full rounded-md" />
        <div className="card__desc">
          <p className="fw-bold">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default CardImage;
