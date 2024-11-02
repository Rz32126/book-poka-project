import bannerImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse mr-6">
    <img
      src={bannerImg}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold mb-20 ml-6">Books to freshen up your bookshelf</h1>
      <button className="ml-6 btn btn-primary">View The List</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;