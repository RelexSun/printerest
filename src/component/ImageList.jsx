import ImageShow from "./ImageShow";
const ImageList = ({ images }) => {
  const renderedImage = images.map((image) => {
    return (
      <div key={image.id}>
        <ImageShow image={image} />
      </div>
    );
  });
  return <div className="image-list">{renderedImage}</div>;
};

export default ImageList;
